$(document).ready(function () {
    // Хедер - скрол
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // маска для телефону
    if ($('.telinput').length > 0) {
        $('.telinput').inputmask({
            "mask": "+ 389999999999",
            showMaskOnHover: false,
            showMaskOnFocus: false,
        });
    }

    // Акції і події - слайдер
    var swiper = new Swiper(".halfslider", {
        slidesPerView: 2.1,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
    });


    $('.tabbtns-list li').on('click', function () {
        var index = $(this).index();

        $('.tabbtns-list li').removeClass('active');
        $(this).addClass('active');

        $('.tab-textwrapper .tab-item').removeClass('active').eq(index).addClass('active');
        $('.tab-imgwrapper .tab-itempic').removeClass('active').eq(index).addClass('active');
    });


    //   rooms slider


    var swiper = new Swiper(".roomsslider", {
        slidesPerView: 1.5,
        spaceBetween: 70,
        loop: true,
        speed: 700,

        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },

        navigation: {
            nextEl: ".swiper-button-next.v1",
            prevEl: ".swiper-button-prev.v1",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                // додаємо 0 перед однозначними числами
                const formatted = current < 10 ? `0${current}` : current;
                return formatted;
            },
        },
    });

    // faq
    $('.faq-item__header').click(function () {
        $('.faq-item__body').not($(this).next('.faq-item__body')).slideUp();
        $(this).next('.faq-item__body').slideToggle();

         $('.faq-item__header').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        
    });






})








// https://codepen.io/antho-fsy/pen/wJqWKj