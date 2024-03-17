// JavaScript Document
(function ($) {
    // show icon go-top when webpage is not on top, and if the webpage is being
    // on top, it will be hided.
    $(window).scroll(function () {
        if ($(window).scrollTop() === 0) {
            $('#go_top').stop(false, true).fadeOut(600);
        } else {
            $('#go_top').stop(false, true).fadeIn(600);
        }
    });

    // Scroll page up to top with scrollTop button.
    $('#go_top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
})(jQuery);
