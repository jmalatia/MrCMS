/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* jqDocReady*/
    //$(document).ready(function () {

    //});

/* jqDocReadyShort*/
    //$(function () {

    //});

/* h5u */
    //(function ($) {

    //})(jQuery);


$(document).ready(function () {
    var $window = $(window);
    var $body = $('body');
    var $fouc = $('.fouc');     //flash of unstyled content

    // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

    // Add class to .fouc elements to allow a graceful fade-in-fast
        //$fouc.addClass('fade-in-fast');


    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-loading');
            //$body.addClass('is-ready');
            //$fouc.removeClass('fouc');
            $fouc.addClass('fouc-done');

            globalOnLoad();

            try {
                pageJS();
            }
            catch (err) {
                //Do Nothing
            }

            

        }, 0);    //100
    });



    


});



var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function globalOnLoad() {
    followChildLinkSetup();
    scrollRevealSetup();
}


function followChildLinkSetup() {
    //Assign this to the parent div and a click anywhere on it will follow the child link.
    $(".follow-child-link").click(function () {
        var href = $(this).find("a").attr("href");
        if (href) {
            window.location = href;
        }
    });
}


function scrollRevealSetup() {
    //Setup any scrollReveal classes
    if ($("[class*='scrollReveal']").length) {
        
        var config = {
            reset: false,
            viewFactor: 0.20,
            mobile: true,
            delay: 0,
            opacity: 0,
            duration: 800
        };

        if (isMobile) {
            config = {
                viewFactor: 0.10,
                opacity: 0.5,
                duration: 500,
                viewOffset: {bottom: '51'}
            };
        }


        window.sr = ScrollReveal(config);

        //sr.reveal('.scrollReveal-default');
        //sr.reveal('.scrollReveal-left', { origin: 'left', scale: 1, distance: '25%' });
        //sr.reveal('.scrollReveal-right', { origin: 'right', scale: 1, distance: '25%' });

        if ($('.scrollReveal').length) { sr.reveal('.scrollReveal'); }
        if ($('.scrollReveal-left').length) { sr.reveal('.scrollReveal-left',   { origin: 'left',  scale: 1, distance: '25%' }); }
        if ($('.scrollReveal-right').length) { sr.reveal('.scrollReveal-right', { origin: 'right', scale: 1, distance: '25%' }); }


    };
}



/*
(function ($) {

    skel
		.breakpoints({
		    xlarge: '(max-width: 1680px)',
		    large: '(max-width: 1280px)',
		    medium: '(max-width: 980px)',
		    small: '(max-width: 736px)',
		    xsmall: '(max-width: 480px)'
		});

    $(function () {

        var $window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Mobile?
        if (skel.vars.mobile)
            $body.addClass('is-mobile');
        else
            skel
                .on('-medium !medium', function () {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $body.addClass('is-mobile');
                });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Scrolly.
        $('.scrolly')
            .scrolly({
                speed: 1500,
                offset: $header.outerHeight()
            });

        // Menu.
        $('#menu')
            .append('<a href="#menu" class="close"></a>')
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'right',
                target: $body,
                visibleClass: 'is-menu-visible'
            });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0
        && $header.hasClass('alt')) {

            $window.on('resize', function () { $window.trigger('scroll'); });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function () { $header.removeClass('alt'); },
                enter: function () { $header.addClass('alt'); },
                leave: function () { $header.removeClass('alt'); }
            });

        }

    });

});
*/
