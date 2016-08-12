(function() {

    'user strict';

    $(document).ready(function() {

        var singlePage = {
            imagesArr: ['slide-01', 'slide-02', 'slide-03'],

            $viewportHeight: $(window).height(),
            $btnBackToTop: $('.btn-back-to-top'),

            /* ----- INIT ----- */
            init: function() {

                singlePage.scrollHeaderMin();
                singlePage.animateBannerImg();
                singlePage.showHideNav();

                $(window).on('scroll', function() {
                    singlePage.scrollHeaderMin();
                    singlePage.btnShowHide();
                });

                singlePage.btnBackToTop();
                singlePage.btnShowHide();

                singlePage.changeLanguageVersion();
                singlePage.buttonChangeLanguage();

                singlePage.btnGoToAbout();
                singlePage.btnGoToSection();
            },

            /* ----- show min header after scroll ----- */
            scrollHeaderMin: function() {
                var $siteHeader = $('.site-header');
                var $bannerHeight = $('.site-banner').height();
                var scrollPosition = $(window).scrollTop();
                return (scrollPosition > $bannerHeight / 4) ? $siteHeader.addClass('header-min-scroll') : $siteHeader.removeClass('header-min-scroll');
            },

            /* ----- show and hide main navigation ----- */
            showHideNav: function() {
                $('.btn-mobile-nav').on('click', function(ev) {
                    ev.preventDefault();
                    var $button = $(this);
                    $button.toggleClass('active');
                    $('.nav-main').slideToggle();
                });
            },

            /* ----- animate images / banner ----- */
            animateBannerImg: function() {
                var img = singlePage.imagesArr.shift();
                singlePage.imagesArr.push(img);
                $('.site-banner').css({
                    'background-image': 'url("images/' + img + '.jpg")'
                });
                setTimeout(singlePage.animateBannerImg, 5000);
            },


            /* ----- language version ----- */
            changeLanguageVersion: function() {
                $('[data-lang]').each(function(index, el) {
                    var $textLang = $(el).data('lang');
                    $(el).text( lang [ localStorage.getItem('lang-version') || 'en'][ $textLang ] );
                });

                var currLang = localStorage.getItem('lang-version');
                $('.nav-language li').removeClass('active');

                if(currLang) {
                    $('.nav-language a[data-ver-lang=' + currLang + ']').parent().addClass('active');
                } else {
                    $('.nav-language a[data-ver-lang=en]').parent().addClass('active');
                }
            },

            /* ----- button change language ----- */
            buttonChangeLanguage: function() {
                $('.nav-language a').on('click', function(ev) {
                   ev.preventDefault();
                    var $button = $(this);
                    var currLang = $button.data('ver-lang');

                    $('.nav-language li').removeClass('active');
                    $button.parent().addClass('active');

                    localStorage.setItem('lang-version', currLang);
                    singlePage.changeLanguageVersion();
                });
            },

            /* ----- show hide - button back to top ----- */
            btnShowHide: function() {
                var $pageTop = $(window).scrollTop();
                var $bannerHeight = $('.site-banner').height();
                return ( $pageTop > $bannerHeight / 3 ) ? singlePage.$btnBackToTop.fadeIn() : singlePage.$btnBackToTop.fadeOut()
            },

            /* ----- button back to top ----- */
            btnBackToTop: function() {
                singlePage.$btnBackToTop.on('click', function(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();

                    $('body').animate({
                       scrollTop: 0
                   }, 800);
                });
            },

            /* ----- button go to about ----- */
            btnGoToAbout: function() {
                $('.btn-next-section').on('click', function(ev) {
                    ev.preventDefault();
                    var aboutPosition = $('#about-me').offset().top;

                    $('body').animate({
                        scrollTop: aboutPosition
                    }, 1200);
                });
            },

            /* ----- button go to section ----- */
            btnGoToSection: function() {
                $('.site-navigation a').on('click', function(ev) {
                    ev.preventDefault();
                    var $link = $(this);
                    var hash = $link[0].hash;
                    var sectionPosition = $(hash).offset().top;

                    $('.site-navigation a').parent().removeClass('active');
                    $link.parent().addClass('active');

                    $('body').animate({
                        scrollTop: sectionPosition
                    }, 1200);
                });
            }
        };

        singlePage.init();
    });

})();