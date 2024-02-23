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
    $(".search-modal-overlay").fadeIn();
    document.body.style.overflow = "hidden";
  });

  // ********* search hide modal  *********//
  $(".search-modal-cross, .search-modal-overlay").on("click", function () {
    $(".search-modal").fadeOut();
    $(".search-modal-overlay").fadeOut();
    document.body.style.overflow = "auto";
  });

  // ********* nav toggle open   *********//
  $(".toggle-nav").on("click", function () {
    $(".mobile-nav").toggleClass("open");
  });

  $(".nav-cross").on("click", function () {
    $(".mobile-nav").removeClass("open");
  });

  $(".mobile-dropdown").click(function (e) {
    e.stopPropagation();

    $(this).toggleClass("active").find(".dropdown-items2").slideToggle(800);

    $(".mobile-dropdown")
      .not(this)
      .removeClass("active")
      .find(".dropdown-items2")
      .slideUp();
  });

  $(".dropdown-list").click(function (e) {
    e.stopPropagation();
  });

  $(".shop-heading").click(function (e) {
    e.stopPropagation();

    $(this).next("ul").slideToggle(800);

    $(".shop-heading").not(this).next("ul").slideUp();
  });

  $(document).click(function () {
    $(".mobile-dropdown")
      .removeClass("active")
      .find(".dropdown-items2")
      .slideUp();
    $(".shop-heading").next("ul").slideUp();
  });

  $(".dropdown-items2").click(function (e) {
    e.stopPropagation();
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

  //***************  PRELOADER ANIMATION  *******************//
  $(window).on("load", function () {
    const loader = $(".loader");

    loader.addClass("loader--hidden");

    loader.on("transitionend", function () {
      loader.remove();
    });
  });

  // Handle click on quick view link
  $(".quick-view").click(function (e) {
    e.preventDefault();

    var productCard = $(this).closest(".product-image");

    var productImage = productCard.find(".pic-1").attr("src");

    var productDetails = productCard.find(".content").html();

    $(".quick-view-modal").data("product-details", productDetails);

    var modalContent = '<div class="product-details">';
    modalContent += '<img src="' + productImage + '" alt="Product Image">';
    modalContent += '<div class="details">' + productDetails + "</div>";
    modalContent += "</div>";

    $(".quick-view-content").html(modalContent);

    $(".quick-view-modal").fadeIn();
  });

  $(".quick-cross-btn").click(function () {
    $(".quick-view-modal").fadeOut();
  });
});
