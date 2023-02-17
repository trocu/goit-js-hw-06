const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
  console.log(body.style.backgroundColor);
});
