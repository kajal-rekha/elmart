$(document).ready(function () {
  //  open modal
  $(".top-header-btn").click(function () {
    $(".modal").fadeIn(1000);
  });

  //  close modal
  $(".cross-btn").click(function () {
    $(".modal").fadeOut(1000);
  });

  $(".dropdown-icon").click(function () {
    $(".language-list").toggle();
  });

  $(".cart-icon").click(function () {
    setTimeout(function () {
      $("#cartModal").addClass("active");
    }, 500);
  });

  $(".cross-btn2").click(function () {
    $("#cartModal").removeClass("active");
  });

  $(".search-icon").click(function () {
    $(".search-modal").fadeIn();
  });

  $(".search-modal-cross").click(function () {
    $(".search-modal").fadeOut();
  });
});
