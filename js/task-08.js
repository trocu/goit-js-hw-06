const form = document.querySelector(".login-form");

form.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Please complete all fields!");
  }
  console.log(`Email: ${email.value} Password: ${password.value}`);
  console.log(event.currentTarget.event.email);
  event.currentTarget.reset();
}
