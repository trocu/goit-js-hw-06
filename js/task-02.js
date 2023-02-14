const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

let newArray = [];
for (let i = 0; i < ingredients.length; i++) {
  newArray[i] = document.createElement("li");
  newArray[i].textContent = ingredients[i];
  newArray[i].className = "item";
}
document.querySelector("#ingredients").append(...newArray);
