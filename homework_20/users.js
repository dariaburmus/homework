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
