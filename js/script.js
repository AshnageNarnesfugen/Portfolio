$(document).ready(function() {
    $(window).scroll(function() {
        parallax();
    });
    function parallax() {
        var wScroll = $(window).scrollTop();
        $('#number1').css({
            'background-position': `center ${wScroll * 0.5}px`,
            'transform': `perspective(700px) rotateX(${wScroll * 0.09}deg)`
        });
        $('#number3').css({
            'background-position': `center ${wScroll * 0.60}px`,
        });
    }
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };

    $('.speaker-box').hover(function() {
        $('.hand').animate({
            opacity: 0.5
        }).css({
            'transform': 'perspective(800px) rotateX(0deg) rotateZ(0deg) translateY(-126px) translateX(179px)'
        });
    }, function() {
        $('.hand').animate({
            opacity: 1
        }).css({
            'transform': 'perspective(700px) rotateX(15deg) rotateZ(3deg) translateY(-150px) translateX(179px)'
        });
    });
    $(".owl-prev").addClass("float-left");
    $(".owl-next").addClass("float-right");
    /*$(".LDM").clickToggle(function() {
        $("body").css({
            "background": "linear-gradient(0deg, rgba(176,176,176,1) 0%, rgba(255,255,255,1) 100%)"
        })
        $(".navbar *").css({
            "background": "#eeeeee",
            "color": "black"
        })
    }, function() {
        $("body").css({
            "background": "linear-gradient(0deg, rgba(20, 20, 24, 1) 0%, rgba(35, 35, 46, 1) 100%)"
        })
        $(".navbar *").css({
            "background": "#23232e",
            "color": "white"
        })
    });*/
    $(function() {

        // container is the DOM element;
        // userText is the textbox

        var container = $(".letter")

        // Shuffle the contents of container
        container.shuffleLetters();

        // Bind events

        // Leave a 4 second pause

        setTimeout(function() {

            // Shuffle the container with custom text
            container.shuffleLetters({
                // $(".letter").children().addClass(".shuffle");

            });
        }, 4000);

    });
    var scrolllink = $('.scroll');
    //smooth scrolling

    scrolllink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active Link Switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrolllink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 20;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('activo');
                $(this).parent().siblings().removeClass('activo');
            }
        });
    });
    //
    // Establish default settings
    var parallaxElements = [];
    var windowHeight = 0;
    var speed = 2;

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    window.requestAnimationFrame = requestAnimationFrame;

    $(document).ready(function() {
        windowHeight = $(window).height();

        //touch event check
        var touchSupported =
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof DocumentTouch);

        if (touchSupported) {
            $(window).bind("touchmove", function(e) {
                var scroll = e.currentTarget.scrollY;
                Parallax(scroll);
            });
        } else {
            $(window).bind("scroll", function(e) {
                var scroll = $(this).scrollTop();
                Parallax(scroll);
            });
        }

        $(window).resize(function() {
            windowHeight = $(window).height();
        });
    });

    function Parallax(scrollTop) {
        // for each of content parallax element
        $('[data-type="parallax"]').each(function() {
            // Save a reference to the element
            var $this = $(this);
            var speed = $this.data("speed") || 0;
            var offset = $this.offset().top;
            var height = $this.outerHeight(true);

            // Check if above or below viewport
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                return;
            }

            var yPos = Math.round((scrollTop - offset) / speed);

            // Apply the Y Position to Set the Parallax Effect
            window.requestAnimationFrame(function() {
               $this.css("top", `${yPos}px`);
            });
        });
    }
    //
    AOS.init();
});
