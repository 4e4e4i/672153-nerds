$(document).ready(function () {
  'use-strict'

  $('.contacts__btn').on('click', function () {

    $('.popup').removeClass('popup--hidden');
    $('.popup-bg').addClass('popup-bg--shown');
  });

  $('.btn-close').on('click', function () {

    $('.popup').addClass('popup--hidden');
    $('.popup-bg').removeClass('popup-bg--shown');
  });
});
