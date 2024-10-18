const swiper = new Swiper(".swiper", {
  // Optional parameters
  parallax: true,
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    380: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  direction: "horizontal",
  horizontalClass: "swiper-pagination-horizontal",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
