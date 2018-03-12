//Smooth scroll implementation on navigation bar
$(function() {
    $(".about-nav").smoothScroll();
    $(".portfolio-nav").smoothScroll();
    $(".skills-nav").smoothScroll();
    $(".contact-nav").smoothScroll();

    $(".drop-down-off").on("click", function(){
        $(".nav-bar").toggleClass("drop-down-on");
        $(".logo").toggleClass("logo-disappear");
        $(this).toggleClass("hamburger-off");
        $(".x-off").toggleClass("x-on");
    });

    $(".x-off").on("click", function() {
        $(".drop-down-off").removeClass("hamburger-off");
        $(this).removeClass("x-on");
        $(".nav-bar").removeClass("drop-down-on");
        $(".logo").removeClass("logo-disappear");
    });

});