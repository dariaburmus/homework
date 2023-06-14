const usersList = document.getElementById('users_list');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let pageNumber = 1;

function showUsers(users, root) {
  root.innerHTML = '';

  users.forEach((user) => {
    const nameEl = document.createElement('p');
    nameEl.innerText = `${user.first_name} ${user.last_name}`;

    const avatarEl = document.createElement('img');
    avatarEl.src = user.avatar;

    const container = document.createElement('div');
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

let xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.onload = function () {
  if (xhr.status === 200) {
    showUsers(xhr.response.data, usersList);

    updateControls(xhr.response.total_pages);
  }
};

const sendRequest = (pageNumber) => {
  xhr.open('GET', `https://reqres.in/api/users?page=${pageNumber}`);
  xhr.send();
};

sendRequest(pageNumber);

nextButton.addEventListener('click', () => {
  sendRequest(++pageNumber);
});

prevButton.addEventListener('click', () => {
  sendRequest(--pageNumber);
});

// new users
const newUsersList = document.getElementById('new_users_list');
const form = document.getElementById('form');

let newUsersApi = new XMLHttpRequest();
newUsersApi.responseType = 'json';

const newUsers = [];

newUsersApi.onload = function () {
  if (newUsersApi.status === 201) {
    newUsers.push(newUsersApi.response);

    showUsers(newUsers, newUsersList);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const user = {};

  formData.forEach((value, key) => (user[key] = value));

  newUsersApi.open('POST', `https://reqres.in/api/users`);
  newUsersApi.setRequestHeader('Content-Type', 'application/json');
  newUsersApi.send(JSON.stringify(user));
});