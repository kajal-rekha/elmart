new WOW().init();

//******************** */ swiper  **************************//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

//************** */ slick-slider **************** //
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1280: {
      items: 4,
    },
    1480: {
      items: 5,
    },
  },
});

// smooth scroll

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
