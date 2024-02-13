$(function () {
  // open modal
  $(".top-header-btn").on("click", function () {
    $(".modal").fadeIn(1000);
  });

  // close modal
  $(".cross-btn").on("click", function () {
    $(".modal").fadeOut(1000);
  });

  $(".dropdown-icon").on("click", function () {
    $(".language-list").toggle();
  });

  $(".cart-icon").on("click", function () {
    setTimeout(function () {
      $("#cartModal").addClass("active");
    }, 500);
  });

  $(".cross-btn2").on("click", function () {
    $("#cartModal").removeClass("active");
  });

  $(".search-icon").on("click", function () {
    $(".search-modal").fadeIn();
  });

  $(".search-modal-cross").on("click", function () {
    $(".search-modal").fadeOut();
  });

  $(".toggle-nav").on("click", function () {
    $(".mobile-nav").toggle();
  });
});
