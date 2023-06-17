// login
const MIN_PASS_LENGTH = 6;
const emailRegex = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,4}$/;

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const emailDisclaimer = document.querySelector('#emailDisclaimer');
const emailError = document.querySelector('#emailError');
const passwordDisclaimer = document.querySelector('#passwordDisclaimer');
const passwordError = document.querySelector('#passwordError');
const noSuchUserMessage = document.querySelector('#noSuchUserMessage');
const userForm = document.getElementById('userForm');
const userListContainer = document.getElementById('usersListContainer');
const editUserForm = document.getElementById('editUserForm');
const forms = document.getElementById('formContainer');

let loginApi = new XMLHttpRequest();
loginApi.responseType = 'json';

let authToken = null;

const handleSuccessAuth = (token) => {
  authToken = token;

  forms.style.display = 'flex';
  userListContainer.style.display = 'flex';

  form.style.display = 'none';
};

const handleError = (error) => {
  if (error === 'user not found') {
    noSuchUserMessage.style.display = 'block';
  } else if (error === 'Missing password') {
    passwordError.style.display = 'block';
  }
};

loginApi.onload = function () {
  if (loginApi.status === 400) {
    handleError(loginApi.response.error);
  } else if (loginApi.status === 200) {
    handleSuccessAuth(loginApi.response.token);
  }
};

const clearPassword = () => {
  passwordInput.value = '';
};

const clearErrors = (el, disclaimerEl) => {
  el.classList.add('hidden');

  disclaimerEl.classList.add('visible');
  disclaimerEl.classList.remove('hidden');
};

const handleErrors = (errorEl, disclaimerEl, hasErrors) => {
  if (!hasErrors) {
    errorEl.classList.add('visible');
    errorEl.classList.remove('hidden');

    disclaimerEl.classList.add('hidden');
  } else {
    errorEl.classList.add('hidden');
    errorEl.classList.remove('visible');

    disclaimerEl.classList.remove('hidden');
  }
};

const setButtonDisabled = (shouldDisable) => {
  if (shouldDisable) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

emailInput.addEventListener('blur', (event) => {
  const isValidEmail = emailRegex.test(event.target.value);

  handleErrors(emailError, emailDisclaimer, isValidEmail);
});

passwordInput.addEventListener('blur', (event) => {
  const isValidPassword = event.target.value.length >= MIN_PASS_LENGTH;

  handleErrors(passwordError, passwordDisclaimer, isValidPassword);
});

passwordInput.addEventListener('input', () => {
  clearErrors(passwordError, passwordDisclaimer);
});

emailInput.addEventListener('input', () => {
  clearErrors(emailError, emailDisclaimer);
});

form.addEventListener('input', () => {
  const isButtonDisabled = !passwordInput.value || !emailInput.value;

  setButtonDisabled(isButtonDisabled);
  noSuchUserMessage.classList.add('hidden');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const hasErrors = [emailError, passwordError].some((el) =>
    el.classList.contains('visible')
  );

  if (hasErrors) {
    return;
  }

  const formData = new FormData(event.target);

  const credentials = {};
  formData.forEach((value, key) => {
    credentials[key] = value;
  });

  loginApi.open('POST', `https://reqres.in/api/login`);
  loginApi.setRequestHeader('Content-Type', 'application/json');
  loginApi.send(JSON.stringify(credentials));
});

// users
const usersList = document.getElementById('usersList');
const newUsersList = document.getElementById('new_usersList');

let users = [];

let xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.open('GET', `https://reqres.in/api/users`);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer ' + authToken);
xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    users.push(...xhr.response.data);

    showUsers(xhr.response.data, usersList);
  }
};

let newUsersApi = new XMLHttpRequest();
newUsersApi.responseType = 'json';

newUsersApi.onload = function () {
  console.log(newUsersApi);
  if (newUsersApi.status === 201) {
    users.push(newUsersApi.response);

    showUsers(users, usersList);
  }
};

let userApi = new XMLHttpRequest();
userApi.responseType = 'json';

const removeUserEl = (userId) => {
  users = users.filter(({ id }) => id !== userId);

  showUsers(users, usersList);
};

const deleteUser = (id) => {
  userApi.open('DELETE', `https://reqres.in/api/users/${id}`);
  userApi.setRequestHeader('Content-Type', 'application/json');
  userApi.setRequestHeader('Authorization', 'Bearer ' + authToken);
  userApi.send();

  userApi.onload = (e) => {
    if (e.target.status === 204) {
      removeUserEl(id);
    }
  };
};

// edit user

const editUserElement = (user, userId) => {
  const candidateIndex = users.findIndex(({ id }) => +id === +userId);

  if (!candidateIndex === -1) {
    return console.error('no such user to edit');
  }

  users[candidateIndex] = user;

  showUsers(users, usersList);
};

const editUser = (user, id) => {
  userApi.open('PUT', `https://reqres.in/api/users/${id}`);
  userApi.setRequestHeader('Content-Type', 'application/json');
  userApi.setRequestHeader('Authorization', 'Bearer ' + authToken);
  userApi.send(user);

  userApi.onload = (e) => {
    if (e.target.status === 200) {
      editUserElement(e.target.response, id);
    }
  };
};

function showUsers(users, root) {
  root.innerHTML = '';

  users.forEach((user) => {
    const nameEl = document.createElement('p');
    nameEl.innerText = `${user.first_name} ${user.last_name} id: ${user.id}`;

    const avatarEl = document.createElement('img');
    avatarEl.src = user.avatar;

    const deleteUserBtn = document.createElement('button');
    deleteUserBtn.innerText = 'Delete';
    deleteUserBtn.id = 'deleteUserBtn';
    deleteUserBtn.onclick = () => {
      deleteUser(user.id);
    };

    const container = document.createElement('div');
    container.classList.add('userCard');
    container.append(nameEl, avatarEl, deleteUserBtn);

    root.appendChild(container);
  });
}

editUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  editUser(JSON.stringify(user), user.id);
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  newUsersApi.open('POST', `https://reqres.in/api/users`);
  newUsersApi.setRequestHeader('Content-Type', 'application/json');
  newUsersApi.setRequestHeader('Authorization', 'Bearer ' + authToken);
  newUsersApi.send(JSON.stringify(user));
});
