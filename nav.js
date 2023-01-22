const about = document.querySelector("#about");
const closeNav = document.querySelector(".header-nav__close");
const home = document.querySelector("#home");
const navbar = document.querySelector(".header-nav");
const navToggle = document.querySelector(".nav-toggle");
const navToggleMenu = document.querySelector(".nav-toggle__text");

const aboutButton = document.querySelector(".header-nav__content--about");
const aboutMeButton = document.querySelector(".about-me__button");
const contactButton = document.querySelector(".header-nav__content--contact");
const educationButton = document.querySelector(
  ".header-nav__content--education"
);
const homeButton = document.querySelector(".header-nav__content--home");
const pastWorkButton = document.querySelector(".header-nav__content--past");

function revertNav() {
  navbar.style.transform = "translateX(100%)";
}

function goToSection(e, section) {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
  revertNav();
}

closeNav.addEventListener("click", function (e) {
  e.preventDefault();
  revertNav();
});

navToggle.addEventListener("click", function (e) {
  e.preventDefault();
  navbar.style.transform = "translateX(0%)";
});

navToggle.addEventListener("mouseover", function () {
  navToggleMenu.style.color = "white";
});

navToggle.addEventListener("mouseout", function () {
  navToggleMenu.style.color = "#39b54a";
});

homeButton.addEventListener("click", function (e) {
  goToSection(e, home);
});

aboutButton.addEventListener("click", function (e) {
  goToSection(e, about);
});

aboutMeButton.addEventListener("click", function (e) {
  goToSection(e, about);
});

window.onscroll = () => {
  if (window.pageYOffset > 800) navToggle.style.backgroundColor = `black`;
  if (window.pageYOffset < 800) navToggle.style.backgroundColor = "transparent";
};
