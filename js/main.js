$(document).ready(function () {
    $('.toggle').click(function () {
        var dropMenu = $('#drop-menu');
        if (dropMenu.hasClass('expanded')) {
            $('#drop-menu').slideUp(500).removeClass('expanded');
        } else {
            $('#drop-menu').slideDown(500).addClass('expanded');
        }

    });
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
