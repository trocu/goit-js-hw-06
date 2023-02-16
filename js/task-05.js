const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", event => {
  if (textInput.value === "") {
    return (output.textContent = "Anonymous");
  }
  output.textContent = event.currentTarget.value;
});
