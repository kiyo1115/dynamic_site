// class MobileMenu {
//   constructor() {
//     this.DOM = {};
//     this.DOM.btn = document.querySelector(".mobile-menu__btn");
//     this.DOM.container = document.querySelector("#global-container");
//     //windowのイベントにontouchstartというイベントがあり、windowかスマホかの検知をしている
//     this.eventType = this._getEventType();
//     this._addEvent();
//     //thisがないとbtnを見に行ってしまう為、thisを使いmobileMenu自体を指定する
//   }

//   _getEventType() {
//     const isTouchCapable =
//       "ontouchstart" in window ||
//       (window.DocumentTouch && document instanceof DocumentTouch);
//     return isTouchCapable ? "touchstart" : "click";
//   }

//   _toggle() {
//     this.DOM.container.classList.toggle("menu-open");
//   }
//   _addEvent() {
//     this.DOM.btn.addEventListener("click", this._toggle.bind(this));
//   }
// }
// new MobileMenu();

//関数化
const mobileMenu = () => {
  const btn = document.querySelector(".mobile-menu__btn");
  const container = document.querySelector("#global-container");
  const cover = document.querySelector(".mobile-menu__cover");
 

  const getEventType = () => {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    return isTouchCapable ? "touchstart" : "click";
  };
  const eventType = getEventType();

  const addEvent = () => {
    btn.addEventListener("click", () => toggle());
    cover.addEventListener("click", () => toggle());
  };
  const toggle = () => {
    container.classList.toggle("menu-open");
  };

  addEvent();
};

// mobileMenu();
