window.addEventListener('load',function (e){
    const videos = new Swiper('.videos__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
            nextEl: '.videos__next',
            prevEl: '.videos__prev',
        },
    });

    const imgs = new Swiper('.imgs__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
            nextEl: '.imgs__next',
            prevEl: '.imgs__prev',
        },
    });

});