//карта
ymaps.ready(function () {

  var myMap = new ymaps.Map('map', {
    center: [59.939151, 30.321555],
    zoom: 17,
    controls: []
  });

  // Отключение зума
  myMap.behaviors.disable('scrollZoom');

  // Отображение маркера
  var MapPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    balloonMaxWidth: 320,
    iconLayout: 'default#image',
    iconImageHref: './img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-40, -215]
  });

  myMap.geoObjects.add(MapPlacemark);

});


//popup
var popup = document.querySelector('.popup'),
    popupOpen = document.querySelector('.contacts__btn'),
    popupClose = popup.querySelector('.btn-close'),
    popupForm = popup.querySelector('.popup__form'),
    popupName = popup.querySelector('[name=username]'),
    popupMail = popup.querySelector('[name=user_email]'),
    popupBg = document.querySelector('.popup-bg');


popupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--shown');
  popupBg.classList.add('popup-bg--shown');
  popupName.focus();
});

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--shown');
  popup.classList.remove('popup--error');
  popupBg.classList.remove('popup-bg--shown');
});

popupBg.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--shown');
  popup.classList.remove('popup--error');
  popupBg.classList.remove('popup-bg--shown');
});

popupForm.addEventListener('submit', function (evt) {
  if (!popupName.value || !popupMail.value) {
    evt.preventDefault();
    popup.classList.remove('popup--error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup--error");
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('popup--shown')) {
      popup.classList.remove('popup--shown');
      popup.classList.remove('popup--error');
      popupBg.classList.remove('popup-bg--shown');
    }
  }
});

//slider
var sliderBtn1 = document.getElementById('slide1'),
    sliderBtn2 = document.getElementById('slide2'),
    sliderBtn3 = document.getElementById('slide3'),
    slide1 = document.querySelector('[data-slide=slide1]'),
    slide2 = document.querySelector('[data-slide=slide2]'),
    slide3 = document.querySelector('[data-slide=slide3]');

sliderBtn1.addEventListener('click', function (evt) {
  evt.preventDefault();
  this.classList.add('slider__control--active');
  sliderBtn2.classList.remove('slider__control--active');
  sliderBtn3.classList.remove('slider__control--active');
  slide1.classList.add('slide--shown');
  slide2.classList.remove('slide--shown');
  slide3.classList.remove('slide--shown');
});

sliderBtn2.addEventListener('click', function (evt) {
  evt.preventDefault();
  this.classList.add('slider__control--active');
  sliderBtn1.classList.remove('slider__control--active');
  sliderBtn3.classList.remove('slider__control--active');
  slide2.classList.add('slide--shown');
  slide1.classList.remove('slide--shown');
  slide3.classList.remove('slide--shown');
});

sliderBtn3.addEventListener('click', function (evt) {
  evt.preventDefault();
  this.classList.add('slider__control--active');
  sliderBtn1.classList.remove('slider__control--active');
  sliderBtn2.classList.remove('slider__control--active');
  slide3.classList.add('slide--shown');
  slide1.classList.remove('slide--shown');
  slide2.classList.remove('slide--shown');
});
