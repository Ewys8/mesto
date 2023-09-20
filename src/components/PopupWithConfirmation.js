import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.popup__submit-button');
}
    setSubmit(submitForm){
        this._submitForm = submitForm
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitForm();
        });
    }

    setSubmitButtonText(text) {
        this._submitButton.textContent = text;
    }
}