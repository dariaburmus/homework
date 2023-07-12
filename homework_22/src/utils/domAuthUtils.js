import { showElement, hideElement } from './domUtils.js';

const userListContainer = document.getElementById('usersListContainer');
const forms = document.getElementById('formContainer');

export const showProtectedElements = () => {
  showElement(forms);
  showElement(userListContainer);
};

export const hideProtectedElements = () => {
  hideElement(forms);
  hideElement(userListContainer);
};
