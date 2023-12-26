const userName = document.querySelector(".name");
const signUpEmail = document.querySelector(".signup-email");
const signUpPassword = document.querySelector(".signup-password");
const signUpBtn = document.querySelector(".btn-signup");
const logInLink = document.querySelector(".login-link");

function createNewUser() {
  const user = {
    name: userName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };

  const isNameValid = nameValidation();
  const isEmailValid = emailValidation();
  const isPassValid = passwordValidation();

  if (!isNameValid || !isEmailValid || !isPassValid) {
    document.querySelector(".signup-error").classList.remove("d-none");
  } else {
    document.querySelector(".signup-error").classList.add("d-none");
    document.querySelector(".signup-success").classList.remove("d-none");
    localStorage.setItem("user", JSON.stringify(user));
  }
}

function nameValidation() {
  const nameRegex = /^[a-zA-Z]{3,}$/;
  const isNameValid = nameRegex.test(userName.value);

  if (isNameValid) {
    userName.classList.replace("is-invalid", "is-valid");
  } else {
    userName.classList.add("is-invalid");
  }

  return isNameValid;
}

function emailValidation() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmailValid = emailRegex.test(signUpEmail.value);
  if (isEmailValid) {
    signUpEmail.classList.replace("is-invalid", "is-valid");
  } else {
    signUpEmail.classList.add("is-invalid");
  }

  return isEmailValid;
}

function passwordValidation() {
  const passRegex = /^.{3,}$/;
  const isPassValid = passRegex.test(signUpPassword.value);
  if (isPassValid) {
    signUpPassword.classList.replace("is-invalid", "is-valid");
  } else {
    signUpPassword.classList.add("is-invalid");
  }

  return isPassValid;
}

signUpBtn.addEventListener("click", createNewUser);
userName.addEventListener("input", nameValidation);
signUpEmail.addEventListener("input", emailValidation);
signUpPassword.addEventListener("input", passwordValidation);
