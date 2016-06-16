 $('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  draggable: true,
  asNavFor: '.mini-slider'
});
$('.mini-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.single-item',
  dots: false,
  arrows: false,
  centerMode: true,
  adaptiveHeight: true,
  focusOnSelect: true
});
