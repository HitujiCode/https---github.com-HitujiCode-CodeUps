
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ドロワーメニュー
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

    //トップに戻るボタン
    var topBtn = $('.totop');
    topBtn.hide();
    
    // ボタンの表示設定
    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var windowHeight = $(this).height();
      var bodyHeight = $(document).height();
      
      // フッターの高さを動的に取得
      var footerHeight = $('.footer').outerHeight() + 16;
    
      if (scrollPosition > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
      }
    
      // フッター手前でボタンを止める
      if (bodyHeight - scrollPosition <= windowHeight + footerHeight) {
        topBtn.css({ position: 'absolute', bottom: footerHeight + 'px' });
      } else {
        topBtn.css({ position: 'fixed', bottom: '0px' });
      }
    });
    
    // ボタンをクリックしたらスクロールして上に戻る
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 300, 'swing');
      return false;
    });
    
});
