import { hideElement, showElement } from './domUtils.js';
import { getAuthToken } from './utils.js';

const userForm = document.getElementById('userForm');
const editUserForm = document.getElementById('editUserForm');
const userIdError = document.getElementById('userIdError');
const idField = document.getElementById('userId');

const newUsersList = document.getElementById('newUsersList');

let newUsers = [];

const authToken = getAuthToken();

const removeUserEl = (userId) => {
  newUsers = newUsers.filter(({ id }) => id !== userId);

  showNewUsers(newUsers, newUsersList);
};

const editUserElement = (user, userId) => {
  const candidateIndex = newUsers.findIndex(({ id }) => +id === +userId);

  if (!candidateIndex === -1) {
    return console.error('no such user to edit');
  }

  newUsers[candidateIndex] = user;

  showNewUsers(newUsers, newUsersList);
};

function showNewUsers(users, root) {
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

idField.addEventListener('change', () => {
  hideElement(userIdError);
});

editUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  if (!newUsers.some(({ id }) => user.id === id)) {
    showElement(userIdError);

    return;
  }

  editUser(JSON.stringify(user), user.id);
  editUserForm.reset();
});

userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  createUser(JSON.stringify(user));
  userForm.reset();
});

const editUser = async (user, id) => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authToken,
      },
      body: user,
    });
    const data = await response.json();

    editUserElement(data, id);
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (data) => {
  try {
    const response = await fetch(`https://reqres.in/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authToken,
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

const deleteUser = async (id) => {
  try {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    });

    removeUserEl(id);
  } catch (e) {
    console.log(e);
  }
};
