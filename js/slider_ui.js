$(function () {
    $("#range1").ionRangeSlider({
        hide_min_max: true,
        min: 1,
        max: 3,
        from: 1,
        to: 3,
        type: 'double',
        step: 1
    });
    $("#range2").ionRangeSlider({
        hide_min_max: true,
        min: 1,
        max: 3,
        from: 1,
        to: 3,
        type: 'double',
        step: 1
    });
	$('.irs-slider.from').mouseenter(function(event) {
		$(this).parent().find('.irs-from').addClass('hover');
	}).mouseleave(function(event) {
        $('.irs-slider.from').parent().find('.irs-from').removeClass('hover');
    });
	$('.irs-slider.to').mouseenter(function(event) {
        $(this).parent().find('.irs-to').addClass('hover');
    }).mouseleave(function(event) {
        $('.irs-slider.to').parent().find('.irs-to').removeClass('hover');
    });
});