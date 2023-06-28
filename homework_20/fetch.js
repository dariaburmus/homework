const MIN_PASS_LENGTH = 6;
const emailRegex = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,4}$/;

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const emailDisclaimer = document.querySelector("#emailDisclaimer");
const emailError = document.querySelector("#emailError");
const passwordDisclaimer = document.querySelector("#passwordDisclaimer");
const passwordError = document.querySelector("#passwordError");
const noSuchUserMessage = document.querySelector("#noSuchUserMessage");
const userForm = document.getElementById("userForm");
const userListContainer = document.getElementById("usersListContainer");
const editUserForm = document.getElementById("editUserForm");
const forms = document.getElementById("formContainer");

// login
let authToken = null;

const handleSuccessAuth = (token) => {
  authToken = token;

  forms.style.display = "flex";
  userListContainer.style.display = "flex";

  form.style.display = "none";
};

const handleError = (error) => {
  if (error === "user not found") {
    noSuchUserMessage.style.display = "block";
  } else if (error === "Missing password") {
    passwordError.style.display = "block";
  }
};

const clearPassword = () => {
  passwordInput.value = "";
};

const clearErrors = (el, disclaimerEl) => {
  el.classList.add("hidden");

  disclaimerEl.classList.add("visible");
  disclaimerEl.classList.remove("hidden");
};

const handleErrors = (errorEl, disclaimerEl, hasErrors) => {
  if (!hasErrors) {
    errorEl.classList.add("visible");
    errorEl.classList.remove("hidden");

    disclaimerEl.classList.add("hidden");
  } else {
    errorEl.classList.add("hidden");
    errorEl.classList.remove("visible");

    disclaimerEl.classList.remove("hidden");
  }
};

const setButtonDisabled = (shouldDisable) => {
  if (shouldDisable) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
};

emailInput.addEventListener("blur", (event) => {
  const isValidEmail = emailRegex.test(event.target.value);

  handleErrors(emailError, emailDisclaimer, isValidEmail);
});

passwordInput.addEventListener("blur", (event) => {
  const isValidPassword = event.target.value.length >= MIN_PASS_LENGTH;

  handleErrors(passwordError, passwordDisclaimer, isValidPassword);
});

passwordInput.addEventListener("input", () => {
  clearErrors(passwordError, passwordDisclaimer);
});

emailInput.addEventListener("input", () => {
  clearErrors(emailError, emailDisclaimer);
});

form.addEventListener("input", () => {
  const isButtonDisabled = !passwordInput.value || !emailInput.value;

  setButtonDisabled(isButtonDisabled);
  noSuchUserMessage.classList.add("hidden");
});

const login = async (credentials) => {
  try {
    const response = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: credentials,
    });

    const data = await response.json();

    if (data.token) {
      handleSuccessAuth(data.token);
    }

    if (data.error) {
      handleError(data.error);
    }
  } catch (e) {
    console.error(e);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasErrors = [emailError, passwordError].some((el) =>
    el.classList.contains("visible")
  );

  if (hasErrors) {
    return;
  }

  const formData = new FormData(event.target);

  const credentials = {};
  formData.forEach((value, key) => {
    credentials[key] = value;
  });

  login(JSON.stringify(credentials));
});

// all users
const usersList = document.getElementById("usersList");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let pageNumber = 1;

function showUsers(users, root) {
  root.innerHTML = "";

  users.forEach((user) => {
    const nameEl = document.createElement("p");
    nameEl.innerText = `${user.first_name} ${user.last_name}`;

    const avatarEl = document.createElement("img");
    avatarEl.src = user.avatar;

    const container = document.createElement("div");
    container.append(nameEl, avatarEl);

    root.appendChild(container);
  });
}

const updateControls = (total) => {
  if (pageNumber === total) {
    nextButton.disabled = true;
    prevButton.disabled = false;
  } else if (pageNumber === 1) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  }
};

const getUsers = async (pageNumber) => {
  try {
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageNumber}`
    );
    const data = await response.json();

    showUsers(data.data, usersList);
    updateControls(data.total_pages);
  } catch (e) {
    console.error(e);
  }
};

getUsers(pageNumber);

nextButton.addEventListener("click", () => {
  getUsers(++pageNumber);
});

prevButton.addEventListener("click", () => {
  getUsers(--pageNumber);
});

// new users
const newUsersList = document.getElementById("newUsersList");

let newUsers = [];

const removeUserEl = (userId) => {
  newUsers = newUsers.filter(({ id }) => id !== userId);

  showNewUsers(newUsers, newUsersList);
};

const deleteUser = async (id) => {
  try {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
    });

    removeUserEl(id);
  } catch (e) {
    console.log(e);
  }
};

// edit user
const editUserElement = (user, userId) => {
  const candidateIndex = newUsers.findIndex(({ id }) => +id === +userId);

  if (!candidateIndex === -1) {
    return console.error("no such user to edit");
  }

  newUsers[candidateIndex] = user;

  showNewUsers(newUsers, newUsersList);
};

const editUser = async (user, id) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: user,
    });
    const data = await response.json();

    editUserElement(data, id);
  } catch (e) {
    console.error(e);
  }
};

function showNewUsers(users, root) {
  root.innerHTML = "";

  users.forEach((user) => {
    const nameEl = document.createElement("p");
    nameEl.innerText = `${user.first_name} ${user.last_name} id: ${user.id}`;

    const avatarEl = document.createElement("img");
    avatarEl.src = user.avatar;

    const deleteUserBtn = document.createElement("button");
    deleteUserBtn.innerText = "Delete";
    deleteUserBtn.id = "deleteUserBtn";
    deleteUserBtn.onclick = () => {
      deleteUser(user.id);
    };

    const container = document.createElement("div");
    container.classList.add("userCard");
    container.append(nameEl, avatarEl, deleteUserBtn);

    root.appendChild(container);
  });
}

editUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  editUser(JSON.stringify(user), user.id);
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  createUser(JSON.stringify(user));
});

const createUser = async (data) => {
  try {
    const response = await fetch(`https://reqres.in/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: data,
    });

    const newUser = await response.json();
    newUsers.push(newUser);

    showNewUsers(newUsers, newUsersList);
  } catch (e) {
    console.error(e);
  }
};
