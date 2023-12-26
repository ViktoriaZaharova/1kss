$(function () {
    $(".main_carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 700
    });

    $('.menu').click(function () {
        $('.toggle-menu').fadeIn();
        return false;
    });

    $('body').click(function () {
        $('.toggle-menu').fadeOut();
    });

    $("[data-fancybox]").fancybox();

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });

});

$(document).ready(function () { // модальное окно форма обратной связи
    $('.popup-btn').on('click', function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'flex')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close, #overlay').on('click', function () {
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});

$(window).on('load', function () {
    $(".loader").fadeOut();
    $(".load-inner").delay(100).fadeOut("slow");
});

$(document).ready(function(){
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});