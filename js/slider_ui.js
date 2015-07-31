$(function () {
    $("#range1").ionRangeSlider({
        hide_min_max: true,
        min: 1,
        max: 22,
        from: 1,
        to: 22,
        type: 'double',
        step: 1,
        values_separator: ';'
    });
    $("#range2").ionRangeSlider({
        hide_min_max: true,
        min: 1,
        max: 3,
        from: 1,
        to: 3,
        type: 'double',
        step: 1,
        values_separator: ';'
    });
    $(document).on('mouseenter','.irs-slider.from',function(){
        $(this).parent().find('.irs-from').addClass('irs-active');
        $(this).parent().find('.irs-single').addClass('irs-single-active');
    });
    $(document).on('mouseout','.irs-slider.from',function(){
        $(this).parent().find('.irs-from').removeClass('irs-active');
        $(this).parent().find('.irs-single').removeClass('irs-single-active');
    });

    $(document).on('mouseenter','.irs-slider.to',function(){
        $(this).parent().find('.irs-to').addClass('irs-active');
        $(this).parent().find('.irs-single').addClass('irs-single-active');
    });

    $(document).on('mouseout','.irs-slider.to',function(){
        $(this).parent().find('.irs-to').removeClass('irs-active');
        $(this).parent().find('.irs-single').removeClass('irs-single-active');
    });

});