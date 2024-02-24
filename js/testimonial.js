document.addEventListener("DOMContentLoaded", function () {
  var testimonialSlider = new Swiper(".testimonial-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    Infinity: true,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
