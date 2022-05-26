(function() {
    "use strict";

    // PAGE PRELOADER JS
    $(window).on('load', function(e) {
        $('body').css('overflow', 'hidden');
        setTimeout(function() {
            $("#preloader").fadeOut(500);
            $('body').css('overflow', 'visible');
        }, 1500);
    });

    jQuery(document).ready(function() {

        $('select').niceSelect();

        $(document).on('click', '.filter_charts a', function(e) {
            e.preventDefault();
            $(this).closest('ul').find('a').removeClass('active');
            $(this).addClass('active');
        })
    })
})();