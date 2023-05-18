
const hamburger = document.querySelector(".hamburger");
const burgerMenu  = document.querySelector(".burger-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".burger-menu.active");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}