let hamburger = document.querySelector(".hamburger");
let mobile_menu = document.querySelector(".mobile-menu");

let contactButton = document.querySelector(".contact");

let isMenuOpen = false;

hamburger.addEventListener("click", function () {
  mobile_menu.classList.toggle("hidden");
});
