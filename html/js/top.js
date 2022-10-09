$(document).ready(function () {
  "use strict";
  $(".hamburger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu_overlay").toggleClass("opened");
  });

  $(".mainv_slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });
  $(".product_slider").slick({
    slidesToShow: 3,
    infinite: true,
    touchMove: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });
  $(".banner_slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    touchMove: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $(".related_slider").slick({
    slidesToShow: 3,
    slidesToScroll:1,
    infinite: true,
    centerMode: false,
    touchMove: true,
    arrows: true,
    pauseOnHover: false,
    autoplay: false,
    autoplaySpeed: 3000,
  });

  if ($(window).width() > 768) {
    $("#h_box04 .product-list .item img").matchHeight();
    $("#footer .footer_box01 .card").matchHeight();
  }
});
