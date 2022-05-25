(function($) {
    "use strict";
    jQuery(document).ready(function() {
        $('select').niceSelect();

        $(document).on('click', '.filter_charts a', function(e) {
            e.preventDefault();
            $(this).closest('ul').find('a').removeClass('active');
            $(this).addClass('active');
        })
    })
})(jQuery);