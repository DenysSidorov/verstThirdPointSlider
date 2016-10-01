$(document).ready(function () {
    if ($('.navBurger').length > 0) { // -----------------------menu---------------
        $('.navBurger').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('nonScroll');
            $(this).toggleClass('active')
                .parents('.headerSection')
                .find('.headerNavigation ul')
                .toggleClass('active');
        });
    }// -----------------------menu---------------

    $('.slideBlock').slick({ // -----------------------slick slider #1---------------
        dots: true,
        arrows: false,
        autoplay: true
    });//все дети этого дива станут слайдами // -----------------------slick slider #1---------------

    $('.footerSlide').slick({ // -----------------------slick slider #2---------------
        dots: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1400
    });//все дети этого дива станут слайдами// -----------------------slick slider #2---------------


    $(window).scroll(function () {  // -----------------------right parallax---------------
        var scroll = $(window).scrollTop();
        var parallaxBlock = $('.preViewTitleButton').offset().top;
        var i = 0;
        if (scroll >= parallaxBlock - 650) {

            $(".parallaxService .viewBlock").each(function () {
                var block = $(this);
                i += 500;
                setTimeout(function () {
                    block.addClass('active');
                }, i);
            });
        }
    })// -----------------------right parallax---------------

    $('.scrollButton').on('click', function(e){ // -----------------------scroll button---------------
        e.preventDefault();
        $('body, html').animate({scrollTop: '0px'}, 500);
    });

});

var arrowOffset = 700;
$(window).on('scroll', function() {

    var window_scroll = $(window).scrollTop();
    if (window_scroll > arrowOffset) {
        $('.scrollButton').fadeIn();
    }
    else{
        $('.scrollButton').fadeOut();
    }
}); // -----------------------scroll button---------------


