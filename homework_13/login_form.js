const MIN_PASS_LENGTH = 6;
const emailRegex = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,4}$/;
const testUser = { login: 'dariaburmus@gmail.com', password: 'ginger1234' };

const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const emailDisclaimer = document.querySelector('#emailDisclaimer');
const emailError = document.querySelector('#emailError');
const passwordDisclaimer = document.querySelector('#passwordDisclaimer');
const passwordError = document.querySelector('#passwordError');
const noSuchUserMessage = document.querySelector('#noSuchUserMessage');

const clearPassword = () => {
  passwordInput.value = '';
};

const clearErrors = (el, disclaimerEl) => {
  el.classList.add('hidden');

  disclaimerEl.classList.add('visible');
  disclaimerEl.classList.remove('hidden');
};

const validateUser = (user, credentials) => {
  if (
    user.login === credentials.login &&
    user.password === credentials.password
  ) {
    return true;
  }

  return false;
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

loginInput.addEventListener('blur', (event) => {
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

loginInput.addEventListener('input', () => {
  clearErrors(emailError, emailDisclaimer);
});

form.addEventListener('input', () => {
  const isButtonDisabled = !passwordInput.value || !loginInput.value;

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

  const credentials = {
    login: loginInput.value,
    password: passwordInput.value,
  };
  
  const isValidUser = validateUser(testUser, credentials);
  if (isValidUser) {
    window.location.assign('https://www.google.com');
  } else {
    noSuchUserMessage.classList.add('visible');
    noSuchUserMessage.classList.remove('hidden');

    clearPassword();
  }
});