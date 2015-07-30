$(document).ready(function() {
	$('.irs-slider').mouseenter(function(event) {
		console.log(event);
		$(this).parent().find('.irs-from').addClass('hover');
	});
	$('.pagination li').click(function(event) {
		$('.pagination li').removeClass('active');
		$(this).addClass('active');
		var pag_li = $(this).attr('data-li');
		$('.news-block').removeClass('active');
		$('.main_step').removeClass('active');
		$('.main_step#step'+pag_li).addClass('active');
		$('.news-block#news'+pag_li).addClass('active');
	});
	$(function() {
		$('.vertical_slide .slide').click(function(event) {
			var tablenum = $(this).attr('data-table');
			$('.ipoteka table').removeClass('visible');
			$('table#table'+tablenum).addClass('visible');
			$('.vertical_slide .slide').removeClass('bg-active');
			$(this).addClass('bg-active');
		});
	})
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true
	});
	$('.slider_preim').slick({
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.accordion span').click(function(event) {
		$(this).toggleClass('up');
		if ($(this).siblings('p').height() > 100) {
			$(this).siblings('p').animate({height: '100px'}, 1000)
		}else{
			$(this).siblings('p').animate({height: '190px'}, 1000)
		}
	});
	$('.raspoloj').on('click', '.routes > div', function() {
		$('.raspoloj .routes > div').removeClass('active');
		$(this).addClass('active');
	});
	$('polygon, path, polyline').mouseenter(function(event) {
		$('polygon, path, polyline').removeClass('hover');
		$(this).addClass('hover');
	}).mouseleave(function(event) {
		$('polygon, path, polyline').removeClass('hover');
	});
	$(function(){
		$('#layer1').plaxmove({ratioH:0.02,ratioV:0.02})
		$('#layer2').plaxmove({ratioH:0.04,ratioV:0.04})
		$('#layer3').plaxmove({ratioH:0.06,ratioV:0.06})
		$('#layer4').plaxmove({ratioH:0.03,ratioV:0.03})
		$('#layer5').plaxmove({ratioH:0.07,ratioV:0.07})
		$('#layer6').plaxmove({ratioH:0.06,ratioV:0.06})
		$('#layer7').plaxmove({ratioH:0.09,ratioV:0.09})
		$('#layer8').plaxmove({ratioH:0.03,ratioV:0.03})
	});
});
function preim() {
	$('.popup_preim').show();
	$('.popup_overlay').show();
	$('.close_preim').show();
}
function preim_out() {
	$('.popup_preim').hide();
	$('.popup_overlay').hide();
	$('.close_preim').hide();
}

function pagination_next() {
	var li = $('.pagination li.active').next();
	if (li.length) {
		$('.pagination li.active').removeClass('active').next().addClass('active');
		$('.main_step.active').removeClass('active').next().addClass('active');
		$('.news-block.active').removeClass('active').next().addClass('active');
	};
}
$('.pag-next').click(function(event) {
	pagination_next();
});
function pagination_prev() {
	var li = $('.pagination li.active').prev();
	if (li.length) {
		$('.pagination li.active').removeClass('active').prev().addClass('active');
		$('.main_step.active').removeClass('active').prev().addClass('active');
		$('.news-block.active').removeClass('active').prev().addClass('active');
	};
}
$('.pag-prev').click(function(event) {
	pagination_prev();
});
function popup_out() {
	$('.popup_overlay').hide();
	$('#request').hide();
}
function popup_req() {
	$('.popup_overlay').show();
	$('#request').show();
}