ymaps.ready(function(){

    ymaps.ready(init);
function init () {


      myMap = new ymaps.Map("mapmesto", {
        center   : [55.751675,37.817295],
        zoom     : 15,
        type: "yandex#hybrid",  
        controls: [],

      });
      myMap.behaviors.disable('scrollZoom')


var myGeoObjects = [];
  myGeoObjects[0] = new ymaps.Placemark(
    [55.751675,37.817295],
      {
       hintContent: '<div class="hint-style">ЖК Ривер парк</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker1.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

  myGeoObjects[1] = new ymaps.Placemark(
    [55.753073,37.812049],
      {
       hintContent: '<div class="hint-style">Метро Коломенская</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker1.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

        myGeoObjects[2] = new ymaps.Placemark(
    [55.68528,37.700658],
      {
       hintContent: '<div class="hint-style">Нагатинский затон</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker3.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

        myGeoObjects[13] = new ymaps.Placemark(
    [55.688847,37.695438],
      {
       hintContent: '<div class="hint-style">Храм</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker4.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

        myGeoObjects[14] = new ymaps.Placemark(
    [55.685066,37.69604],
      {
        iconContent: 'Я тащусь',
       hintContent: '<div class="hint-style">Парковка</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker5.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

    myGeoObjects[3] = new ymaps.Placemark(
    [55.688061,37.69746],
      {
       hintContent: '<div class="hint-style">Яхт-клуб</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker6.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });


    myGeoObjects[4] = new ymaps.Placemark(
    [55.678819,37.687111],
      {
       hintContent: '<div class="hint-style">Поликлиника</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker7.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });
        
    myGeoObjects[5] = new ymaps.Placemark(
    [55.686213,37.694172],
      {
       hintContent: '<div class="hint-style">Школа</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'pic/design/scholl.png',
        iconImageSize: [47, 47],
        iconImageOffset: [-32, -75]
        });
        
    myGeoObjects[6] = new ymaps.Placemark(
    [55.680377,37.686392],
      {
       hintContent: '<div class="hint-style">Детский сад</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: 'pic/design/sadik.png',
        iconImageSize: [47, 47],
        iconImageOffset: [-32, -75]
        });
        
    myGeoObjects[7] = new ymaps.Placemark(
    [55.692323,37.534496],
      {
       hintContent: '<div class="hint-style">«Университет»</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/metro.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

        
    myGeoObjects[8] = new ymaps.Placemark(
    [55.663309,37.482556],
      {
       hintContent: '<div class="hint-style">«Юго-Западная»</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/metro.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

    myGeoObjects[9] = new ymaps.Placemark(
    [55.679702,37.464419],
      {
       hintContent: '<div class="hint-style">Научно-Практический центр Детской Психоневрологии</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/apteka.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

    myGeoObjects[10] = new ymaps.Placemark(
    [55.678255,37.448932],
      {
       hintContent: '<div class="hint-style">Поликлиника 177, детская поликлиника 88</div>'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/apteka.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

    myGeoObjects[11] = new ymaps.Placemark(
    [55.678331,37.467913],
      {
       hintContent: '<div class="hint-style">ТРЦ Фестиваль'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/magaz.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

    myGeoObjects[12] = new ymaps.Placemark(
    [55.684056,37.460259],
      {
       hintContent: '<div class="hint-style">Магазин'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/magaz.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });

    myGeoObjects[15] = new ymaps.Placemark(
    [55.673057,37.45124],
      {
       hintContent: '<div class="hint-style">Пятерочка'
        },
        {
        iconLayout: 'default#image',
        iconImageHref: '/pic/design/magaz.png',
        iconImageSize: [94, 74],
        iconImageOffset: [-32, -75]
        });
      
var clusterIcons=[{
        href:'/pic/design/pointer.png',
        size:[31,40],
        offset:[0,0]
}];
        
   var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
        // Устанавливаем стандартный макет балуна кластера "Карусель".
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        // Устанавливаем собственный макет.
           //clusterBalloonItemContentLayout: customItemContentLayout,
        // Устанавливаем режим открытия балуна. 
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,
        // Устанавливаем размеры макета контента балуна (в пикселях).
        clusterBalloonContentLayoutWidth: 300,
        clusterBalloonContentLayoutHeight: 200,
        // Устанавливаем максимальное количество элементов в нижней панели на одной странице
        clusterBalloonPagerSize: 5
        // Настройка внешего вида нижней панели.
        // Режим marker рекомендуется использовать с небольшим количеством элементов.
        // clusterBalloonPagerType: 'marker',
        // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
        // clusterBalloonCycling: false,
        // Можно отключить отображение меню навигации.
        // clusterBalloonPagerVisible: false
    });

clusterer.add(myGeoObjects);
//myMap.geoObjects.add(clusterer);

ymaps.route([[55.764349, 37.705674], 'Москва пер. солдатский 26']),ymaps.route([[55.751354,37.716328], 'Москва пер. солдатский 26']).then(
   
 function (route) {
        route.options.set({ strokeColor: 'ab40ca', strokeStyle: 'dot', opacity: 1 });
        myMap.geoObjects.add(route);
        var points = route.getWayPoints();
    points.options.set('preset',{ iconLayout: 'twirl#redDotIcon' });
    points.get(0).properties.set('balloonContent','м.Лефортово');},
    function (error) { alert('Возникла ошибка: ' + error.message);}
    );
  ymaps.geoQuery(myGeoObjects).addToMap(myMap);
}

});