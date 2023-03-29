// // HeroSliderクラスを関数形式で書き換える
// function HeroSlider(el) {
//   // Swiperインスタンスを作成
//   var swiper = _initSwiper(el);
  

//   // Swiperインスタンスを作成する関数
//   function _initSwiper(el) {
//     return new Swiper(el, {
//       direction: "horizontal",
//       loop: true,
//       effect: "coverflow",
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 1,
//       breakpoints: {
//         1024: {
//           slidesPerView: 2,
//           spaceBetween: 10,
//         },
//       },
//       speed: 1000,
//     });
//   }

//   // startメソッドを定義
//   function start(options) {
//     // オプションの初期値を設定
//     options = Object.assign(
//       {
//         delay: 4000,
//         disableOnInteraction: false,
//       },
//       options
//     );
//     // autoplayが動作していない場合に再開する
//     if (!swiper.autoplay.running) {
//       swiper.params.autoplay = options;
//       swiper.autoplay.start();
//     }
//   }

//   // stopメソッドを定義
//   function stop() {
//     // autoplayが動作している場合に停止する
//     if (swiper.autoplay.running) {
//       swiper.autoplay.stop();
//     }
//   }

//   // startメソッドとstopメソッドを外部から呼び出せるように返り値を定義
//   return {
//     start: start,
//     stop: stop,
//   };
// }



function HeroSlider(el) {
  var swiper = initSwiper(el);
  var autoplayOptions = null;

  function initSwiper(el) {
    return new Swiper(el, {
      direction: 'horizontal',
      loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      speed: 1000,
    });
  }

  function start(options) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );
    autoplayOptions = options;

    if (!swiper.autoplay.running) {
      swiper.params.autoplay = autoplayOptions;
      swiper.autoplay.start();
    }
  }

  function stop() {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    }
  }

  function restart() {
    if (autoplayOptions !== null) {
      start(autoplayOptions);
    }
  }

  return {
    start: start,
    stop: stop,
    restart: restart
  };
}
