const hamburger = document.querySelector("#hamburger-menu");
const nav = document.querySelector(".u-nav-container");
const fseffect = document.querySelector(".fseffect");

const uaccordionpane = document.querySelectorAll(".u-accordion-pane");
const uaccordionitem = document.querySelectorAll(".u-accordion-item");
const uaccordionlink = document.querySelectorAll(".u-accordion-link");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  fseffect.classList.toggle("seffect");
});

uaccordionlink.forEach((item, index) => {
  item.addEventListener("click", () => {
    uaccordionlink.forEach((link) => {
      link.classList.remove("active");
    });

    uaccordionpane.forEach((panel) => {
      panel.classList.remove("u-accordion-active");
    });
    uaccordionpane[index].classList.add("u-accordion-active");
  });
});
