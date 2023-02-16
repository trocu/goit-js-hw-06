const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("input", event => {
  text.style.fontSize = event.currentTarget.value + "px";
  console.log(text.style.fontSize);
});
