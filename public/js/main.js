// const hamburger = document.querySelector("#hamburger-menu");
// const nav = document.querySelector(".u-nav-container");
const fseffect = document.querySelector(".fseffect");

const uaccordionpane = document.querySelectorAll(".u-accordion-pane");
const uaccordionitem = document.querySelectorAll(".u-accordion-item");
const uaccordionlinks = document.querySelectorAll(".u-accordion-link");

// hamburger.addEventListener("click", () => {
//   nav.classList.toggle("open");
//   fseffect.classList.toggle("seffect");
// });

uaccordionlinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    
    if(uaccordionpane[index].classList.contains("u-accordion-active")){
      link.classList.remove("active");
      uaccordionpane[index].classList.remove("u-accordion-active");
      console.log("active")
      return
    }

    uaccordionlinks.forEach((link) => {
      link.classList.remove("active");
    });

    uaccordionpane.forEach((panel) => {
      panel.classList.remove("u-accordion-active");
    });
    uaccordionpane[index].classList.toggle("u-accordion-active");
    link.classList.toggle("active");
  });
});
