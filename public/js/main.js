const hamburger = document.querySelector("#hamburger-menu");
const nav = document.querySelector(".u-nav-container");
const fseffect = document.querySelector(".fseffect");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  fseffect.classList.toggle("seffect");
});
