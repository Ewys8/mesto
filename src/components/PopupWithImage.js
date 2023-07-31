import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector, name, link) {
        super(popupSelector);
        this._name = name;
        this._link = link;
        this._image = this._popup.querySelector('.popup__image');
        this._imageCaption = this._popup.querySelector('.popup__figcaption');
    }

    open = (item) => {
        super.open();
        this._image.src = this._link;
        this._imageCaption.textContent = this._name;
        this._image.alt = this._name;
    }
}
