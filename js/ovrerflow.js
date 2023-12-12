let burgerMenuNav = document.querySelector(".burger-menu-nav");
const closeButton = document.querySelector(".burger-menu");
let body = document.querySelector("body");

function openBurgerMenu() {
  burgerMenuNav.classList.add("open");
  body.style.overflow = "hidden";
  closeButton.addEventListener("click", closeBurgerMenu);
}

function closeBurgerMenu() {
  burgerMenuNav.classList.remove("open");
  body.style.overflow = "";
  closeButton.removeEventListener("click", closeBurgerMenu);
}

const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", openBurgerMenu);

const burgerMenuNavLinks = document.querySelectorAll(".burger-menu-nav a");
for (const link of burgerMenuNavLinks) {
  link.addEventListener("click", closeBurgerMenu);
}
