var e = .01 * window.innerHeight;
document.documentElement.style.setProperty("--vh", "".concat(e, "px"));
var myScroll;
$(document).ready(function(){
    var createMenu = function(){
        if($('#hamburger').hasClass('active')) {
            $('#menu').addClass('visible');
            $('.iScrollVerticalScrollbar').addClass('hidden');
            setTimeout(function(){ $('#menu').addClass('active'); }, 250);
        } else {
            $('#menu').removeClass('active');
            $('.iScrollVerticalScrollbar').removeClass('hidden');
            setTimeout(function(){ $('#menu').removeClass('visible'); }, 250);
        }
    }
    $('header nav #menu #bg-menu, #hamburger').click(function(){
        $('#hamburger').toggleClass('active');
        createMenu();
    });
/*    $('.scrollcontainer.window-height').each(function(){
        $(this).height($.windowHeight());
    });

    $('#home').click(function(){
        myScroll.scrollToElement('#projects-home', 750);
    });
    $('.owl-carousel').owlCarousel({
        items : 1,
        nav:true
    });*/
});

var timeout;
document.onmousemove = function(){

}

/*$(window).on('mousewheel DOMMouseScroll mousemove', function (event) {
    clearTimeout(timeout);

    $('#home').removeClass('watching');

    timeout = setTimeout(function(){
        if(myScroll.y == 0 && !$('#menu').hasClass('active')) {
            $('#home').addClass('watching');
        }
    },1500);
});

$(function(){
    var _scrolling = false;
    myScroll = new IScroll('main', {
        //snap: '.scrollcontainer',
        scrollbars: "custom",
        interactiveScrollbars: 1,
        click: 1,
        tap: 1,
        preventDefault: 0,
        disablePointer: 0,
        disableTouch: 0,
        disableMouse: 0,
        mouseWheel: 1,
        invertWheelDirection:0,
        keyBindings: 0,
        shiftIndicators: 1
    });
})
$(window).resize(function(){
    myScroll.refresh();
})
$(window).load(function(){
    myScroll.refresh();
})*/
