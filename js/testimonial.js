document.addEventListener("DOMContentLoaded", function () {
  var testimonialSlider = new Swiper(".testimonial-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    Infinity: true,
     autoplay: true,
    
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
