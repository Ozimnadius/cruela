window.addEventListener('load',function (e){

    const videos = new Swiper('.videos__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.videos__next',
            prevEl: '.videos__prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                spaceBetween: 30,
            }
        }
    });

    const imgs = new Swiper('.imgs__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        // Navigation arrows
        navigation: {
            nextEl: '.imgs__next',
            prevEl: '.imgs__prev',
        },
        breakpoints: {
            // when window width is >= 768px
            768: {
                spaceBetween: 30,
            }
        }
    });

    $('.password__look').on('click', function (e){
        e.preventDefault();

        if($(this).hasClass('open')){
            $('.password__val').attr("type", "password");
            $(this).removeClass('open');
        } else{
            $('.password__val').attr("type", "text");
            $(this).addClass('open');
        }

    });

});