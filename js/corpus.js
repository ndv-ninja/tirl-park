function svg_Size()
{
			var width  = $('.container').width();
			var height = $('.container').height();
			var h_perc = height*15/100;
					var svg = $('svg');
			
			var sgv_he = svg.height();
				var svg_width  = svg.width();
	//	$('.main').height(height+h_perc);	
			
			if(width >2000)
			{
				 svg.css('margin-top',-(sgv_he/7)-40+'px');
				 $('svg').css('height',h_perc+'%');
			}
			else
			{
				svg.css('margin-top','auto');
				 $('svg').css('height','100%');
			}
			
if(svg_width < width)
	{
		svg.width(width);
		svg.height('auto');
	}	
}

$(window).resize(function()
{
	svg_Size();

});

$( document ).ready(function(e) {
$("path, polygon").click(function(){       
				var obj = jQuery.parseJSON( $(this).attr('api-data'));
			 document.location.href = '?housing_id='+obj.h_id;
 });      
 
$("path, polygon").mousemove(     
	function (pos) {
			if ($(this).attr('api-data') !=undefined && $(this).attr('api-data')){
			
				$('.tooltype').html('');	
				var big = $('.tooltype');
				big.show();
				var obj = jQuery.parseJSON( $(this).attr('api-data'));
				var text ='<div class="flats"><span class="number">'+obj.h_fl+'</span> <span class="txt">квартир</span></div>\
	    					<div class="sections"><span class="number">'+obj.h_shn+'</span> <span class="txt"><p style="  font-size: 12px;">'+obj.f_se+' секция</p></span></div>\
	    					<div class="ar_right corpus"><span class="number">'+obj.f_fl+'</span> <span class="txt">этаж</span></div></div>';

				big.html(text);
				big.css('left',(pos.pageX-230)+'px').css('top',(pos.pageY-30)+'px');  
			}	
	}).mouseleave(function() {
		if ($('.tooltype').is(":visible")){
			$('.tooltype').hide();
		}
	});	 
	
	$('svg')[0].setAttribute('preserveAspectRatio', 'xMinYMin slice');
	svg_Size();
	$('svg image').width(1920);
	$('svg image').height(1080);	
});