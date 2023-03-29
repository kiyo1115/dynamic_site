function TextAnimation(el) {

  el = el instanceof HTMLElement ? el : document.querySelector(el);
    const chars = el.innerHTML.trim().split("");
  
    el.innerHTML = chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  
    function animate() {
      el.classList.toggle("inview");
    }
  
    return {
      animate,
    };
  }
  
  function TweenTextAnimation(el) {
    const parent = TextAnimation(el);
    el = el instanceof HTMLElement ? el : document.querySelector(el);
    const chars = el.querySelectorAll(".char");
  
    function animate() {
      el.classList.add("inview");
      chars.forEach((c, i) => {
        gsap.to(c, 0.6, {
          ease: Back.easeOut,
          delay: i * 0.05,
          startAt: { y: "-200%", opacity: 0 },
          y: "0%",
          opacity: 1,
        });
      });
    }
  
    return {
      animate,
    };
  }
  


// 下記はクラスでの宣言方法
// class TextAnimation {
//     constructor(el) {
//         this.DOM = {};
//         this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
//         this.chars = this.DOM.el.innerHTML.trim().split("");
//         this.DOM.el.innerHTML = this._splitText();
//     }
//     _splitText() {
//         return this.chars.reduce((acc, curr) => {
//             curr = curr.replace(/\s+/, '&nbsp;');
//             return `${acc}<span class="char">${curr}</span>`;
//         }, "");
//     }
//     animate() {
//         this.DOM.el.classList.toggle('inview');
//     }
// }
// class TweenTextAnimation extends TextAnimation {
//     constructor(el) {
//         super(el);
//         this.DOM.chars = this.DOM.el.querySelectorAll('.char');
//     }
    
//     animate() {
//         this.DOM.el.classList.add('inview');
//         this.DOM.chars.forEach((c, i) => {
//             gsap.to(c, .6, {
//                 ease: Back.easeOut,
//                 delay: i * .05,
//                 startAt: { y: '-50%', opacity: 0},
//                 y: '0%',
//                 opacity: 1
//             });
//         });
//     }
// }