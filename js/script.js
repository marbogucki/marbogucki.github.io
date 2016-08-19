(function() {

    'user strict';

    $(document).ready(function() {

        var singlePage = {
            imagesArr: ['slide-01', 'slide-02', 'slide-03'],

            $viewportHeight: $(window).height(),
            $btnBackToTop: $('.btn-back-to-top'),

            /* ----- INIT ----- */
            init: function() {

                singlePage.scrollHeaderMin( $('.site-header'), 'header-min-scroll' );
                singlePage.animateBannerImg();
                singlePage.showHideNav( $('.btn-mobile-nav'), $('.nav-main') );

                $(document).on('scroll', function() {
                    singlePage.scrollHeaderMin( $('.site-header'), 'header-min-scroll' );
                    singlePage.btnShowHide( $('.btn-back-to-top') );
                });

                singlePage.btnBackToTop( $('.btn-back-to-top, .site-logo a') );
                singlePage.btnShowHide( $('.btn-back-to-top') );

                singlePage.changeLanguageVersion();
                singlePage.buttonChangeLanguage();

                singlePage.btnDownToSection( $('.btn-next-section'), $('#about-me') );
                singlePage.btnGoToSection();

                $(document).on('scroll', singlePage.scrollGoToSection);
                singlePage.scrollGoToSection();

            },

            /* ----- show min header after scroll ----- */
            scrollHeaderMin: function(headerSite, classHeader) {
                var $bannerHeight = headerSite.height();
                var scrollPosition = $(document).scrollTop();
                return (scrollPosition > $bannerHeight / 5) ? headerSite.addClass(classHeader) : headerSite.removeClass(classHeader);
            },

            /* ----- show and hide main navigation ----- */
            showHideNav: function(button, menu) {
                button.on('click', function(ev) {
                    ev.preventDefault();
                    var $this = $(this);
                    $this.toggleClass('active');
                    menu.slideToggle();
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
                    $(el).text( lang [ localStorage.getItem('lang-version') || 'pl'][ $textLang ] );

                    if($textLang == 'button_cv') {
                        $(el).attr('href', 'doc/cv-marcin-bogucki-' + localStorage.getItem('lang-version') + '.pdf');
                    }
                });

                var currLang = localStorage.getItem('lang-version');
                $('.nav-language li').removeClass('active');

                $('html').attr('lang', currLang);

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
            btnShowHide: function(button) {
                var $pageTop = $(window).scrollTop();
                var $bannerHeight = $('.site-banner').height();
                return ( $pageTop > $bannerHeight / 4 ) ? button.fadeIn() : button.fadeOut()
            },


            /* ----- button back to top ----- */
            btnBackToTop: function(button) {
                button.on('click', function(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();

                    $('html, body').animate({
                       scrollTop: 0
                   }, 800);
                });
            },

            /* ----- button go to about ----- */
            btnDownToSection: function(button, sectionPage) {
                button.on('click', function(ev) {
                    ev.preventDefault();
                    var aboutPosition = sectionPage.offset().top;

                    $('html, body').animate({
                        scrollTop: aboutPosition
                    }, 1200);
                });
            },

            /* ----- button go to section ----- */
            btnGoToSection: function() {
                $('.site-navigation a').on('click', function(ev) {
                    ev.preventDefault();

                    $(document).off('scroll', singlePage.scrollGoToSection);
                    $('.site-navigation a').parent().removeClass('active');
                    $(this).parent().addClass('active');

                    var link = $(this).attr('href');
                    var sectionPosition = $(link).offset().top;

                    $('.nav-main').slideUp();
                    $('.btn-mobile-nav').removeClass('active');

                    $('html, body').stop().animate({
                        scrollTop: sectionPosition
                    }, 800, function() {
                        $(document).on('scroll', singlePage.scrollGoToSection);
                    });
                });
            },

            /* ----- scroll go to section ----- */
            scrollGoToSection: function() {
                var scrollTop = $(document).scrollTop();

                $('.site-navigation a').each(function() {
                    var sectionElement = $(this).attr('href');
                    var sectionPosition = $(sectionElement).offset().top;

                    if(sectionPosition <= scrollTop + 100) {
                        $('.site-navigation a').parent().removeClass('active');
                        $(this).parent().addClass('active');
                    }
                });
            }
        };

        singlePage.init();
    });

})();