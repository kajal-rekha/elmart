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

  $(".mobile-dropdown").on("mouseenter", function () {
    $(this).find(".dropdown-items2").addClass("open");
  });

  $(".mobile-dropdown").on("mouseleave", function () {
    $(this).find(".dropdown-items2").removeClass("open");
  });

  //********* update subtotal  *********//
  function updateSubtotal() {
    var subtotal = 0;
    $(".cart-item").each(function () {
      var quantity = parseInt($(this).find(".quantity").text());
      var pricePerItem = parseFloat($(this).find(".item-total").data("price"));
      var itemTotal = quantity * pricePerItem;
      $(this)
        .find(".item-total")
        .text("$" + itemTotal.toFixed(2));
      subtotal += itemTotal;
    });
    $(".subtotal").text("$" + subtotal.toFixed(2));
  }

  //********** Increment quantity   ************//
  $(document).on("click", ".increment", function () {
    var $quantityElement = $(this).siblings(".quantity");
    var currentValue = parseInt($quantityElement.text());
    $quantityElement.text(currentValue + 1);
    updateSubtotal();
  });

  //********** Decrement quantity  ************//
  $(document).on("click", ".decrement", function () {
    var $quantityElement = $(this).siblings(".quantity");
    var currentValue = parseInt($quantityElement.text());
    if (currentValue > 1) {
      $quantityElement.text(currentValue - 1);
      updateSubtotal();
    }
  });

  updateSubtotal();
});
