$(document).ready(function () {
  // ********* top header open modal  *********//
  $(".top-header-btn").on("click", function () {
    $(".modal").fadeIn(1000);
  });

  //********* top header close modal  **********//
  $(".cross-btn").on("click", function () {
    $(".modal").fadeOut(1000);
  });

  // ********* cart open modal  *********//
  $(".cart-icon ").on("click", function () {
    $("#cartModal").toggleClass("show");
  });

  // ********* cart close modal  *********//
  $(".cross-btn2").on("click", function () {
    $("#cartModal").removeClass("show");
  });

  // ********* search open modal  *********//
  $(".search-icon").on("click", function () {
    $(".search-modal").fadeIn();
  });

  // ********* search close modal  *********//
  $(".search-modal-cross").on("click", function () {
    $(".search-modal").fadeOut();
  });

  // ********* nav toggle open   *********//
  $(".toggle-nav").on("click", function () {
    $(".mobile-nav").toggleClass("open");
  });

  $(".nav-cross").on("click", function () {
    $(".mobile-nav").removeClass("open");
  });

  $(".dropdown").on("mouseenter", function () {
    $(this).find(".dropdown-items2").addClass("open");
  });

  $(".dropdown").on("mouseleave", function () {
    $(this).find(".dropdown-items2").removeClass("open");
  });
});
