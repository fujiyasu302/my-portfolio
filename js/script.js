

$('.menu').on('click', function (event) {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  // $('.gnavi').toggleClass('open');
});

// ハンバーガーメニュー・ページ内リンクをクリックで閉じる
$('.gnav__menu a[href]').on('click', function (event) {
  $('.menu').trigger('click');
});

// topロゴ
jQuery(window).on('load', function() {
  jQuery('#loader-bg').hide();
});

// topロゴ

// about
$(function () {
  $(window).scroll(function () {
    $('.about').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 250) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// about

// skill
$(function () {
  $(window).scroll(function () {
    $('.m-skill').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// skill


// スクロールフェードイン
$(function () {
  $(window).scroll(function () {
    $(".scroll-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});




// m-service
$(function () {
  $(window).scroll(function () {
    $('.m-service0').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// service

// t-service
$(function () {
  $(window).scroll(function () {
    $('.t-service').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});
// t-service

// m-service
$(function () {
  $(window).scroll(function () {
    $('.m-service1').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});
// m-service

// b-service
$(function () {
  $(window).scroll(function () {
    $('.b-service').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});
// b-service

// u-service
$(function () {
  $(window).scroll(function () {
    $('.u-service').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});
// u-service

// お問い合わせボタン
$(function () {
  $(window).scroll(function () {
    $('.contact-btn').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// お問い合わせボタン

// portfolio
$(function () {
  $(window).scroll(function () {
    $('.m-portfolio').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// スクロールフェードイン
$(function () {
  $(window).scroll(function () {
    $(".scroll-fade03").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});
// portfolio

// profile
$(function () {
  $(window).scroll(function () {
    $('.m-profile').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// profile

// profile
// スクロールフェードイン
$(function () {
  $(window).scroll(function () {
    $(".scroll-fade02").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});
// profile
// スクロールフェードイン


// contact
$(function () {
  $(window).scroll(function () {
    $('.contact').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
      }
    });
  });
});
// contact

//page topボタン
$(function () {
  var topBtn = $('#pageTop');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      //---- 画面を120pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    } else {
      //---- 画面が120pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });
  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
//page topボタン

$(function(){
  $('html,body').animate({
    scrollTop: 0 }, '1');
});
