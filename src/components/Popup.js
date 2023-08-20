export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
//публичный метод открытия попапа
open() {
  console.log(this._popup);
  this._popup.classList.add('popup_opened');
  document.addEventListener('keydown',this._handleEscClose);
}

//публичный метод закрытия попапа
close() {
  this._popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", this._handleEscClose);
};

//метод закрытия попапа по ESC
_handleEscClose(event) {
  if (event.key === "Escape") {
    this.close();
  }
};

//метод закрытия попапа по иконке и оверлэю
setEventListeners() {
  this._popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      this.close();
    }
  });
  }
}
