const MIN_PASS_LENGTH = 6;
const emailRegex = /^[a-z0-9._%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,4}$/;

const submit = document.querySelector("#submit");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailDisclaimer = document.querySelector("#emailDisclaimer");
const emailError = document.querySelector("#emailError");
const passwordDisclaimer = document.querySelector("#passwordDisclaimer");
const passwordError = document.querySelector("#passwordError");
const noSuchUserMessage = document.querySelector("#noSuchUserMessage");
const forms = document.getElementById("formContainer");
const form = document.querySelector("#form");
const userListContainer = document.getElementById("usersListContainer");

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
