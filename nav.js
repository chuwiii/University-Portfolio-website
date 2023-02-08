const closeNav = document.querySelector(".header-nav__close");
const navbar = document.querySelector(".header-nav");
const navToggle = document.querySelector(".nav-toggle");
const navToggleMenu = document.querySelector(".nav-toggle__text");

const aboutMeButton = document.querySelector(".about-me__button");
const navContentButton = document.querySelector(".header-nav__content");

function revertNav() {
  navbar.style.transform = "translateX(100%)";
}

function goToSection(e, section) {
  e.preventDefault();
  document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  revertNav();
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") revertNav();
});

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

aboutMeButton.addEventListener("click", function (e) {
  goToSection(e, `#about`);
});

window.onscroll = () => {
  if (window.pageYOffset > 800) navToggle.style.backgroundColor = `black`;
  if (window.pageYOffset < 800) navToggle.style.backgroundColor = "transparent";
};

navContentButton.addEventListener("click", (e) => {
  console.log(e.target);
  if (!e.target.classList.contains("nav__links")) return;

  const id = e.target.getAttribute("href");
  goToSection(e, id);
});
