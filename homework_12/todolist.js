const createButton = document.querySelector('#createButton');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const prioritySelect = document.querySelector('#priority');
const list = document.querySelector('#list');

const handleCreateToDo = () => {
  // Allow user to create Todo only with title present
  if (!title.value) {
    return;
  }

  const li = document.createElement('li');
  const itemWrapper = document.createElement('div');
  const titleElement = document.createElement('h3');
  const descriptionElement = document.createElement('span');
  const removeButton = document.createElement('button');
  const checkBox = document.createElement('input');

  checkBox.type = 'checkbox';

  checkBox.addEventListener('change', (event) => {
    if (event.target.checked) {
      li.classList.add('checked');
    } else {
      li.classList.remove('checked');
    }
  });

  removeButton.addEventListener('click', (event) => {
    const parent = event.target.parentElement;

    if (parent.classList.contains('checked')) {
      event.target.parentElement.remove();
    }
  });

  itemWrapper.id = 'itemWrapper';
  removeButton.id = 'removeBtn';
  removeButton.innerText = 'remove';

  titleElement.innerText = title.value;
  descriptionElement.innerText = description.value;

  itemWrapper.appendChild(titleElement);
  itemWrapper.appendChild(descriptionElement);

  li.appendChild(checkBox);
  li.appendChild(itemWrapper);
  li.appendChild(removeButton);
  li.classList.add(prioritySelect.value);

  list.appendChild(li);

  title.value = '';
  description.value = '';
};

createButton.addEventListener('click', handleCreateToDo);