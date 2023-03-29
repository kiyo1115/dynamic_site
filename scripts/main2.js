

  // _heroAnimationを呼ぶたびにインスタンス化されてしまい、
  // 同じスライダーに対して何度もstart()を実行させないようにするために外に出す
  const heroSlider = HeroSlider(".swiper");

  const _heroAnimation = (el, inview) => {
    if (inview) {
      const options = {};
      // const options = { delay: 2000 };
      heroSlider.start(options); // start()にオプションを渡して再開する
      // heroSlider.start(); // start()を呼び出す
    } else {
      heroSlider.stop(); // stop()を呼び出す
    }
  };

  const sides = document.querySelectorAll(".side");
  const _sideAnimation = function (el, inview) {
    if (inview) {
      sides.forEach((side) => {
        side.classList.add("inview");
      });
    } else {
      sides.forEach((side) => {
        side.classList.remove("inview");
      });
    }
  };

  const _textAnimation = function (el, inview) {
    if (inview) {
      const ta = TweenTextAnimation(el); //export先：text-animation
      ta.animate();
    }
  };

  const _inviewAnimation = function (el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  };

  const header = document.querySelector(".header");
  const _navAnimation = function (el, inview) {
    if (inview) {
      header.classList.remove("triggerd");
    } else {
      header.classList.add("triggerd");
    }
  };

  mobileMenu();
  
  Pace.on("done", () => scrollInit());

  function scrollInit() {
    ScrollObserver(".swiper", _heroAnimation, { once: false });
    ScrollObserver(".tween-animate-title", _textAnimation);
    ScrollObserver(".cover-slide", _inviewAnimation);
    ScrollObserver(".appear", _inviewAnimation);
    //rootMarginをつけることで開いた瞬間に出てくる処理を送らせている（今回の場合スライドしたタイミングで発火するようにしている）
    ScrollObserver("#main-content", _sideAnimation, {
      once: false,
      rootMargin: "-300px 0px",
    });
    ScrollObserver(".nav-trigger", _navAnimation, { once: false });
  }

  
  // 注意点　エクスポートする場合、
  // 下記だとfunctionの外側で定義しているため、実行部分の外枠に
  // const heroSlider = HeroSlider(".swiper"); を囲むfunctionを作り
  // exportする必要がある
  // 下記はエクスポートする際の例
//HeroSliderをエクスポートする場合はインスタンス化の重複をさけるため下記のようにエクスポートする
// function aaa(){
//   const heroSlider = HeroSlider(".swiper");

//   const _heroAnimation = (el, inview) => {

//     if (inview) {
//       // const options = {};
//       const options = {delay:2000};
//       heroSlider.start(options); // start()にオプションを渡して再開する
//       // heroSlider.start(); // start()を呼び出す
//     } else {
//       heroSlider.stop(); // stop()を呼び出す
//     }
//   };

//   ScrollObserver(".swiper", _heroAnimation, { once: false });

// }

// export default aaa;

//ScrollObserverno第三引数(once: false)を与えてデフォルト値をfalseにし、
// ScrollObserverを実行する際も
//マージして、ずっと監視対象にする設定にしている
