// const categories = document.querySelectorAll(".item");
// const categoryTitle = document.querySelectorAll("h2");
// console.log(`Number of categories: ${categories.length}`);
// for (let i = 0; i < categories.length; i++) {
//   console.log(`Category: ${categoryTitle[i].textContent}`);
//   console.log(`Elements: ${categories[i].querySelectorAll("li").length}`);
// }

const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function (el) {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
