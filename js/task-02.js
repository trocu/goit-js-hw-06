const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// const ingredientsList = document.querySelector("#ingredients");
const firstItem = document.createElement("li");
const secondItem = document.createElement("li");
const thirdItem = document.createElement("li");
const fourthItem = document.createElement("li");
const fifthItem = document.createElement("li");
const sixthItem = document.createElement("li");
firstItem.textContent = "Potatoes";
secondItem.textContent = "Mushrooms";
thirdItem.textContent = "Garlic";
fourthItem.textContent = "Tomatos";
fifthItem.textContent = "Herbs";
sixthItem.textContent = "Condiments";

// ingredientsList.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);
document
  .querySelector("#ingredients")
  .append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);
