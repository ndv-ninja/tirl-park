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
});