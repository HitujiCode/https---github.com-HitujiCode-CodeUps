
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    let scrollTop = 0;

    $(".js-hamburger, .js-sp-nav").click(function () {
      $(".js-hamburger,.js-sp-nav").toggleClass("is-active");
      if($("body").hasClass("is-fixed")){
        // スクロール開放
        $("body").css("top","");
        $("body").removeClass("is-fixed");
        window.scrollTo(0, scrollTop);
      } else {
        // スクロール禁止
        scrollTop = $(window).scrollTop();
        $("body").css("top", -scrollTop + "px");
        $("body").addClass("is-fixed");
      }
    //   swiper.update();
    });
    
    $(window).resize(function() {
      if ($(window).width() >= 768) {
        if ($(".js-hamburger").hasClass("is-active")) {
          // スクロール開放
          $("body").css("top","");
          $("body").removeClass("is-fixed");
          window.scrollTo(0, scrollTop);
          $(".js-hamburger").removeClass("is-active");
          $(".js-sp-nav").fadeOut();
        }
      }
    });
});
