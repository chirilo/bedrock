/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof window.Mozilla === 'undefined') {
    window.Mozilla = {};
}

;(function($) {
    'use strict';

    var $window = $(window);
    var $document = $(document);
    var $body = $('body');
    var $nav = $('.smarton-nav');
    var navTop = $nav.offset();
    var navHeight = $nav.height() + 30;


    $body.addClass('js-ready');


    // Sticky navigation
    var fixed = false;
    var didScroll = false;

    $window.scroll(function() {
        didScroll = true;
    });

    $(document).ready(function() {
        var scrollTop = $window.scrollTop();
        if ( scrollTop >= navTop.top ) {
            didScroll = true;
        }
    });

    function adjustScrollbar() {
        if (didScroll) {
            didScroll = false;
            var scrollTop = $window.scrollTop();
            if( scrollTop >= navTop.top ) {
                if(!fixed) {
                    fixed = true;
                    $nav.addClass('fixed');
                    $('#ask').css('padding-top', navHeight);
                }
            } else {
                if(fixed) {
                    fixed = false;
                    $nav.removeClass('fixed');
                    $('#ask').removeAttr('style');
                }
            }
        }
    }

    // Check for an adjusted scrollbar every 100ms.
    setInterval(adjustScrollbar, 100);

    //Scroll to the linked section
    $document.on('click', '.nav-steps a[href^="#"]', function(e) {
        e.preventDefault();
        // Extract the target element's ID from the link's href.
        var elem = $(this).attr('href').replace( /.*?(#.*)/g, "$1" );
        $('html, body').animate({
            scrollTop: $(elem).offset().top - 83
        }, 1000, function() {
            $(elem).attr('tabindex','100').focus().removeAttr('tabindex');
        });
    });


})(window.jQuery);

