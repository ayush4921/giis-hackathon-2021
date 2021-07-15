var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});


$('#toggle').click(function() {
  $(this).toggleClass('is-active');
  $('#navbarCollapse').toggleClass('is-active');
});

