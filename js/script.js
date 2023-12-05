$(function () {

    // ハンバーガーメニュー

    $('.hamburger,.sp-navi').on('click', function () {
        $('.sp-navi').fadeToggle();
        $('.hamburger').toggleClass('open')
    });

    // トップへボタン途中から表示

    // pc版

    jQuery(function ($) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 600) {
                $('.to-top').fadeIn(400);
            } else {
                $('.to-top').fadeOut(400);
            }
        });
    });

    // スマホ版

    jQuery(function ($) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 600) {
                $('.sp-to-top').fadeIn(400);
            } else {
                $('.sp-to-top').fadeOut(400);
            }
        });
    });
});