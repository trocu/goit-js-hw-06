const form = document.querySelector(".login-form");

form.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  const userData = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    return alert("Please complete all fields!");
  }
  console.log(userData);
  event.currentTarget.reset();
}
