const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

for (let i = 0; i < images.length; i++) {
  gallery.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery-item"><img class="gallery-img" alt="${images[i].alt}"
src="${images[i].url}"/></li>`
  );
}

// let html =
//   "<img src='https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='White and Black Long Fur Cat'>";
// ul.insertAdjacentHTML("afterbegin", html);

// let newArray = [];
// for (let i = 0; i < images.length; i++) {
//   newArray[i] = document.createElement("img");
//   newArray[i].setAttribute(
//     "src",
//     "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   );
// }
// document.querySelector(".gallery").append(...newArray);
// console.log(newArray);

// console.log(newElem);
// console.log(img);

// document.querySelector("gallery").appendChild(newElem);
// newElem.appendChild(img);
