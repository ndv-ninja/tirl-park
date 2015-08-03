var route = null;
var to_coord = [55.761801,37.796598];
ymaps.ready(function()
        {
                var destinations = {
                                'Озерная ул., д.7': [55.686467,37.465101],
                                'Трубная пл., д.2': [55.766491, 37.622333],
                                'Кутузовский пр-т, д.18': [55.746785, 37.552184],
                                'Метро Новогиреево': [55.751675, 37.817295],
                                'ул. С. Радонежского, д. 2': [55.746279, 37.671399],
                                'Варшавское шоссе, д.59': [55.675641, 37.626951],
                                'Алтуфьевское шоссе, д.22': [55.859266, 37.585583],
                                'ул. Красная Пресня, д. 29': [55.762252, 37.564069],
                                'Ленинградское ш., д. 19': [55.821805, 37.494449],
                                'ул. Профсоюзная, д.7': [55.683097, 37.570384],
                                'ул. Марш. Бирюзова, д. 28': [55.797387, 37.486661],
                                'Братиславская, д. 13, к.1': [55.660297, 37.76027],
                                'Оружейный пер., д. 5': [55.771266, 37.597998],
                                'Проспект Мира, д. 182': [55.826104, 37.647846],
                                'Б. Строченовский переулок, д. 4, стр.1': [55.729807, 37.62978],
                                'ул. Нижн. Масловка, д. 14': [55.792073, 37.575953],
                                'Краснопрудная, 26': [55.779135, 37.667168],
                                'ул. Винницкая, д. 27': [55.702862, 37.491274],
                                'Лермонтовский пр., д.10, к.1': [55.700628, 37.851754],
                        },
                        
                        myMap = new ymaps.Map('map',
                        {
                                // При инициализации карты обязательно нужно указать
                                // её центр и коэффициент масштабирования.
                                center: [55.75396,37.620393], // Москва
                                type: "yandex#hybrid",
                                zoom: 12,
                                controls: []
                        });

            $('.select').click(function()
  {
    $(this).toggleClass('opened');

    $(this).find('li').click(function()
      {
        var x = $(this).attr('data-x');
        var y = $(this).attr('data-y');
        var header = $(this).attr('data-header');
        var addr = $(this).attr('data-addr');
        var metro = $(this).attr('data-metro');
        var phone = $(this).attr('data-phone');
        var img = $(this).attr('data-img');

        var text = $(this).text();
        $(this).closest('.select').find('span').text(text);

        myMap.setCenter([x, y]);
        console.log(myMap.getCenter());
      });
  });
            
        function clickGoto() {
            window.scrollTo(1, 1);
        var pos = this.title;
        
       myMap.panTo(destinations[pos], {
            flying: true,
            zoom: 12           
        }).then(function(){
            
            var index = $(this).attr('id');
            console.log(index);
            
            myMap.setCenter(destinations[pos], 12);
        },this) ;

        return false;
    }
      // навешиваем обработчики
    var col = document.getElementsByClassName('goto');
        
    for (var i = 0, n = col.length; i < n; ++i) {
        col[i].onclick = clickGoto;

    }                       

               
var myPlacemark1 = new ymaps.Placemark(destinations['Озерная ул., д.7'],
{
        hintContent: 'Офис продаж на объекте',
},
                {
                        iconLayout: 'default#image',
                        iconImageHref: '/pic/design/o7.png',
                        iconImageSize: [52, 64],
                        iconImageOffset: [-20, -40]
                });
                myMap.geoObjects.add(myPlacemark1);
                
                var myPlacemark2 = new ymaps.Placemark(destinations['Трубная пл., д.2'],
                {

					   balloonContentBody: '<div style="font-size:16px;">Метка</div>'

                }, 

					

                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize: [84, 99],
                        iconImageOffset: [-31, -79],
						iconImageClipRect: [[0,0], [84, 99]],
						
		
			                       
                });
                myMap.geoObjects.add(myPlacemark2);
                

                var myPlacemark3 = new ymaps.Placemark(destinations['Кутузовский пр-т, д.18'],
                {
                        hintContent: 'Отделение на Кутузовском',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],
					   
                });
                myMap.geoObjects.add(myPlacemark3);
                var myPlacemark4 = new ymaps.Placemark(destinations['ул. С. Радонежского, д. 2'],
                {
                        hintContent: 'Отделение на Римской',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],

                });
                myMap.geoObjects.add(myPlacemark4);
                var myPlacemark5 = new ymaps.Placemark(destinations['Варшавское шоссе, д.59'],
                {
                        hintContent: 'Отделение Нагатинское',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark5);
                var myPlacemark6 = new ymaps.Placemark(destinations['Алтуфьевское шоссе, д.22'],
                {
                        hintContent: 'Отделение Отрадное',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark6);
                var myPlacemark7 = new ymaps.Placemark(destinations['ул. Красная Пресня, д. 29'],
                {
                        hintContent: 'Отделение на Красной Пресне',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],

                });
                myMap.geoObjects.add(myPlacemark7);
                var myPlacemark8 = new ymaps.Placemark(destinations['Ленинградское ш., д. 19'],
                {
                        hintContent: 'Отделение на Войковской',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                        iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark8);
                var myPlacemark9 = new ymaps.Placemark(destinations['ул. Профсоюзная, д.7'],
                {
                        hintContent: 'Юго-Западное отделение',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark9);
                var myPlacemark10 = new ymaps.Placemark(destinations['ул. Марш. Бирюзова, д. 28'],
                {
                        hintContent: 'Северо-Западное отделение',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                        iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark10);
                var myPlacemark11 = new ymaps.Placemark(destinations['Братиславская, д. 13, к.1'],
                {
                        hintContent: 'Юго-Восточное отделение',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
						iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark11);
                var myPlacemark12 = new ymaps.Placemark(destinations['Оружейный пер., д. 5'],
                {
                        hintContent: 'Центральное отделение',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                        iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark12);
                var myPlacemark13 = new ymaps.Placemark(destinations['Проспект Мира, д. 182'],
                {
                        hintContent: 'Северо-восточное отделение',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
						iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark13);
                var myPlacemark14 = new ymaps.Placemark(destinations['Б. Строченовский переулок, д. 4, стр.1'],
                {
                        hintContent: 'Отделение на Павелецкой',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
						iconImageOffset: [-31, -79],
                });
                myMap.geoObjects.add(myPlacemark14);
                var myPlacemark15 = new ymaps.Placemark(destinations['ул. Нижн. Масловка, д. 14'],
                {
                        hintContent: 'Отделение Савёловское',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
                        iconImageOffset: [-31, -79],
					   
                });
                myMap.geoObjects.add(myPlacemark15);


                var myPlacemark16 = new ymaps.Placemark(destinations['Лермонтовский пр., д.10, к.1'],
                {
                        hintContent: 'Отделение на Лермонтовском пр.',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
						iconImageSize:  [84, 99],
						iconImageOffset: [-31, -79],
						
                });
                myMap.geoObjects.add(myPlacemark16);
                
                 var myPlacemark17 = new ymaps.Placemark(destinations['Краснопрудная, 26'],
                {
                         hintContent: 'Отделение на Красносельской',          
                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/ndv.png',
                        iconImageSize:  [84, 99],
                        iconImageOffset: [-40, -29],
                });
                myMap.geoObjects.add(myPlacemark17);                

                var myPlacemark18 = new ymaps.Placemark(destinations['Метро Новогиреево'],
                {
                        hintContent: 'Метро Новогиреево',

                },
                {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/metro.png',
                        iconImageSize:  [84, 99],
                       iconImageOffset: [-31, -79],
                       
                });
                myMap.geoObjects.add(myPlacemark18);
				$('.btn a').click(function()
  {
	  
  });
    $('.routes div').click(function()
    {
          $('.routes div').removeClass('current-route');
          $(this).addClass('current-route');
          var x = $(this).attr('data-coord-x');
          var y = $(this).attr('data-coord-y');
          var r = $(this).attr('data-rout');
          
        if (r == 'router'){
          if(route) {myMap.geoObjects.remove(route);}
          ymaps.route(
            [
              [x,y],
              to_coord
            ]).then(function (router)
            {
                
                route = router;
                myMap.geoObjects.add(router);
                var points = route.getWayPoints(),
                lastPoint = points.getLength() - 1;
                points.get(0).options.set('visible', false);
                points.get(1).options.set('visible', false);
            }, function (error) {
              alert('Âîçíèêëà îøèáêà: ' + error.message);
            });
        }
    });

});