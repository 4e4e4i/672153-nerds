$(document).ready(function () {
  'use-strict'

  $('.slider__control').on('click', function () {
    var id = $(this).attr('id');
    var slide = $('.slide[data-slide="'+id+'"]');

    $(this).addClass('slider__control--active').siblings().removeClass('slider__control--active');
    $(slide).addClass('slide--shown').siblings().removeClass('slide--shown');
  });
});
