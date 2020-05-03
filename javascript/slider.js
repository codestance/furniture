let slideTime = $('.slider').length * 1000;
$('.slider').slice(1).hide();
setInterval(function() {
    "use strict";
    $('.slider').first().fadeOut(1000).next().fadeIn(1000).end().appendTo('section')
}, slideTime);