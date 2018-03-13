$(document).ready(function () {
    $('.toggle').click(function () {
        var dropMenu = $('#drop-menu');
        if (dropMenu.hasClass('expanded')) {
            $('#drop-menu').slideUp(500).removeClass('expanded');
        } else {
            $('#drop-menu').slideDown(500).addClass('expanded');
        }

    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });


    function validateForm(event) {

        if ($('#name').val() == '' || $('#name').val() == 'Podaj Imię!') {
            event.preventDefault();
            $('#name').val('Podaj Imię!');
            $('#name').addClass('input-error');
        }

        if ($('#email').val() == '' || $('#email').val() == 'Podaj Email!') {
            event.preventDefault();
            $('#email').val('Podaj Email!');
            $('#email').addClass('input-error');
        }

        if ($('#comment').val() == '' || $('#comment').val() == 'Wpisz wiadomość!') {
            event.preventDefault();
            $('#comment').val('Wpisz wiadomość!');
            $('#comment').addClass('input-error');
        }

    }

    $('#comment').click(function () {
        if ($('#comment').hasClass('input-error')) {
            $('#comment').val('');
            $('#comment').removeClass('input-error');
        }
    });

    $('#email').click(function () {
        if ($('#email').hasClass('input-error')) {
            $('#email').val('');
            $('#email').removeClass('input-error');
        }
    });

    $('#name').click(function () {
        if ($('#name').hasClass('input-error')) {
            $('#name').val('');
            $('#name').removeClass('input-error');
        }
    });

    $('.submit').click(validateForm);

    
    
    
    
    
    
    
    
})
