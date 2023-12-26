const logOutBtn = document.querySelector(".btn-log-out");
const heading = document.querySelector(".heading-primary");

const storedUser = JSON.parse(localStorage.getItem("user"));

heading.innerHTML = `Welcome ${storedUser.name}`;
logOutBtn.addEventListener("click", function () {
  location.assign("index.html");
});
