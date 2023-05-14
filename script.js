let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");

let contactButton = document.querySelector(".contact");

let isMenuOpen = false;

hamburger.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
