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
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".swiper-button-next.v2",
            prevEl: ".swiper-button-prev.v2",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            575: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1399: {
                slidesPerView: 2.1,
                spaceBetween: 20,
            },
        },
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
        slidesPerView: 1,
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
        breakpoints: {
            575: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1.5,
                spaceBetween: 70,
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

    // menu
    $('.burger-btn').click(function () {
        $('body').addClass('hidden');
        $('.header__left').addClass('open');
        $('.menu-overlay').addClass('show');

    });

    $('.closemenu, .menu-overlay').click(function () {
        $('body').removeClass('hidden');
        $('.header__left').removeClass('open');
        $('.menu-overlay').removeClass('show');
    });

    // fancybox
    if ($('[data-fancybox]').length > 0) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }

    // gallery slider

    var swiper = new Swiper(".gallery-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next.v3",
            prevEl: ".swiper-button-prev.v3",
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
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 45,
            },
        },
    });

    // contacts
    $('.contact-item.dropdown .title').click(function () {
        $(this).next('ul').slideToggle();
        $(this).toggleClass('open');
    });


})








// https://codepen.io/antho-fsy/pen/wJqWKj