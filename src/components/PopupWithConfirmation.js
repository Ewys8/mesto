import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        //this._handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.popup__submit-button');
        this._submitHandler = submitHandler
}
    open(id) {
        this._id = id;
        super.open();
    }

    setSubmitButtonText(text) {
        this._submitButton.textContent = text;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._submitHandler(this._id);
        this.close();
        });
    }
}