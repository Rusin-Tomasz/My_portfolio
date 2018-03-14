$(document).ready(function () {
    $('.toggle').click(function () {
        var dropMenu = $('#drop-menu');
        if (dropMenu.hasClass('expanded')) {
            $('#drop-menu').slideUp(500).removeClass('expanded');
        } else {
            $('#drop-menu').slideDown(500).addClass('expanded');
        };
    });
    // ---Zmnienne do aktywnej nawigacji oraz icon---
    var headerHeight = parseInt($('#main-header').outerHeight(), 10);
    var aboutHeight = parseInt($('#about').outerHeight(), 10);
    var skillsHeight = parseInt($('#skills').outerHeight(), 10);
    var technologiesHeight = parseInt($('#technologies').outerHeight(), 10);
    var projectsHeight = parseInt($('#projects').outerHeight(), 10);

    //    -----aktywna nawigacja-----

    function activeMenu() {
        var actualY = parseInt($(window).scrollTop(), 10);
        if (actualY < headerHeight) {
            $('.home').addClass('active');
        } else {
            $('.home').removeClass('active');
        };

        if (actualY >= headerHeight && actualY < (headerHeight + aboutHeight)) {
            $('.about').addClass('active');
        } else {
            $('.about').removeClass('active');
        };

        if (actualY >= (headerHeight + aboutHeight) && actualY < (headerHeight + aboutHeight + skillsHeight + technologiesHeight)) {
            $('.skills').addClass('active');
        } else {
            $('.skills').removeClass('active');
        };

        if (actualY >= (headerHeight + aboutHeight + skillsHeight + technologiesHeight) && actualY < (headerHeight + aboutHeight + skillsHeight + technologiesHeight + projectsHeight)) {
            $('.projects').addClass('active');
        } else {
            $('.projects').removeClass('active');
        };

        if (actualY >= (headerHeight + aboutHeight + skillsHeight + technologiesHeight + projectsHeight)) {
            $('.contact').addClass('active');
        } else {
            $('.contact').removeClass('active');
        };
    };

    //    -----Smooth Scroll------
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    //    -------Walidacja formularza-------
    function validateForm(event) {
        if ($('#name').val() == '' || $('#name').val() == 'Podaj Imię!') {
            event.preventDefault();
            $('#name').val('Podaj Imię!');
            $('#name').addClass('input-error');
        };

        if ($('#email').val() == '' || $('#email').val() == 'Podaj Email!') {
            event.preventDefault();
            $('#email').val('Podaj Email!');
            $('#email').addClass('input-error');
        };

        if ($('#comment').val() == '' || $('#comment').val() == 'Wpisz wiadomość!') {
            event.preventDefault();
            $('#comment').val('Wpisz wiadomość!');
            $('#comment').addClass('input-error');
        };
    };

    $('#comment').click(function () {
        if ($('#comment').hasClass('input-error')) {
            $('#comment').val('');
            $('#comment').removeClass('input-error');
        };
    });

    $('#email').click(function () {
        if ($('#email').hasClass('input-error')) {
            $('#email').val('');
            $('#email').removeClass('input-error');
        };
    });

    $('#name').click(function () {
        if ($('#name').hasClass('input-error')) {
            $('#name').val('');
            $('#name').removeClass('input-error');
        };
    });

    $('.submit').click(validateForm);

    //  ---------Koniec walidacji formularza----------

    //  ------------Pojawianie się ikon po scrollu----------
    if (window.outerWidth > 1000) {
        $('.icon-1').hide();
        $('.icon-2').hide();
        $('.icon-3').hide();
        $('.icon-4').hide();
        $('.skills-text-1').hide();
        $('.skills-text-2').hide();
        $('.skills-text-3').hide();
        $('.skills-text-4').hide();

        $(window).scroll(function () {
            showIcons();
            if (window.outerWidth > 992) {
                activeMenu();
            };
        });
    };

    function showIcons() {
        var skillsInnerHeight = parseInt($('.skills-inner').outerHeight(), 10);
        var actualY = parseInt($(window).scrollTop(), 10);

        if (actualY >= ((aboutHeight + headerHeight) * 0.8)) {
            $('.skills-text-1').fadeIn(2000);
            $('.icon-1').show(1000, 'linear');
        };

        if (actualY >= ((aboutHeight + headerHeight + 400 + skillsInnerHeight) * 0.8)) {
            $('.skills-text-2').fadeIn(2000);
            $('.icon-2').show(1000, 'linear');
        };

        if (actualY >= ((aboutHeight + headerHeight + 500 + skillsInnerHeight * 2) * 0.8)) {
            $('.skills-text-3').fadeIn(2000);
            $('.icon-3').show(1000, 'linear');
        };

        if (actualY >= ((aboutHeight + headerHeight + 800 + skillsInnerHeight * 3) * 0.8)) {
            $('.skills-text-4').fadeIn(2000);
            $('.icon-4').show(1000, 'linear');
        };
    };
})
