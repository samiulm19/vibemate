(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        // smooth scroll when menu click

        function smoothScrollTop() {
            $('.header__navigation ul li > a').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();

                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 80
                    }, 1000, 'swing'); // swing = smoother easing
                }
            });
        }
        smoothScrollTop();


        function setupOffcanvasNavigation() {
            $('.offcanvas .menu-item').on('click', function (e) {
                const target = $(this.getAttribute('href'));

                if (target.length) {
                    e.preventDefault();

                    // Scroll to section
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 80 // Adjust offset for fixed header if needed
                    }, 1000, 'swing');

                    // Close the offcanvas
                    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasExample'));
                    if (offcanvas) {
                        offcanvas.hide();
                    }
                }
            });
        }

        setupOffcanvasNavigation();

        // smooth scroll when menu click



        /* active menu item when click */

        $('.menu-item').on('click', function () {
            $('.menu-item').removeClass('active');
            $(this).addClass('active');
        });

        /* active menu item when click */


            $('.user__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                dots: false,
                autoplay: true,
                navText: [
                    '<span class="custom-owl-prev">&#10094;</span>',
                    '<span class="custom-owl-next">&#10095;</span>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });


        // aos animation js

        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 1000,
            easing: 'ease',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom'
        });

        // aos animation js






    });


}(jQuery));