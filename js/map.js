$(function () {
  'use strict';

  ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: []
    });

    // Отключение зума
    myMap.behaviors.disable('scrollZoom');

    // Отображение маркера
    var MapPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      balloonMaxWidth: 320,
      iconLayout: 'default#image',
      iconImageHref: '../img/map-marker.png',
      iconImageSize: [231, 190],
      iconImageOffset: [-50, -190]
    });

    myMap.geoObjects.add(MapPlacemark);

  });


});
