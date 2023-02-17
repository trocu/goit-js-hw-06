const textInput = document.querySelector("#validation-input");
const textLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === Number(textLength)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
