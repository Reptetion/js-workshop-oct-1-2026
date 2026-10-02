// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class

const heading = document.querySelector(".title");
heading.textContent = "MRUHacks x Aku";

let count = 0;

const counterButton = document.querySelector("#counter-btn");

counterButton.addEventListener("click", function () {
  count++;
  counterButton.textContent = `Clicked: ${count} times`;
});
