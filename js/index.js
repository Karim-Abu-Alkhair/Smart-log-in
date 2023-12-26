const logInEmail = document.querySelector(".login-email");
const logInPassword = document.querySelector(".login-password");
const logInBtn = document.querySelector(".btn-login");
const signUpLink = document.querySelector(".signup-link");

function logIn() {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const user = JSON.parse(storedUser);

    if (
      user.email !== logInEmail.value ||
      user.password !== logInPassword.value
    ) {
      console.log("Login Failed");
      document.querySelector(".signin-error").classList.remove("d-none");
      return;
    }

    location.assign("welcome.html");
  } else {
    document.querySelector(".signin-error").classList.remove("d-none");
  }
}

logInBtn.addEventListener("click", logIn);
