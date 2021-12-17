window.addEventListener('load', function (e) {

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

    if (document.querySelector(".password")) {
        new Password();
    }

});

class Password {
    constructor() {
        this.form = document.querySelector(".password__form");
        this.letters = document.querySelectorAll(".password__letter");
        this.look = document.querySelector(".password__look");
        this.input = document.querySelector(".password__val");
        this.btn = document.querySelector(".password__submit");
        this.password = "";
        this.init();
    }

    init() {
        $('.password__look').on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('open')) {
                $('.password__letter').prop("type", "password");
                $(this).removeClass('open');
            } else {
                $('.password__letter').prop("type", "text");
                $(this).addClass('open');
            }
        });

        this.form.addEventListener('input', (e) => {
            let next = e.target.nextElementSibling;
            let prev = e.target.previousElementSibling;
            this.password = this.password + e.data;

            if (e.data) {
                if (next) {
                    this.focus(next);
                } else {
                    this.btn.classList.add("active");
                    this.input.value = this.password;
                    this.btn.focus();
                }
            }

        });

        document.addEventListener('keydown', (e) => {
            if (e.code == "Backspace") {
                e.preventDefault();
                e.target.value = '';
                let prev = e.target.previousElementSibling;
                if (prev) {
                    this.focus(prev);
                }
            }
        });

    }

    focus(el) {
        el.focus();
    }

}