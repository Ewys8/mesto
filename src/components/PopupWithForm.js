import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._popupForm = this._popup.querySelector('.form');
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
        this._submitButton = this._popupForm.querySelector('.popup__submit-button');
    }
    _getInputValues() {
        this._valuesArray = {};
         // Проходим по всем полям ввода формы
        this._inputList.forEach(input => {
          // Добавляем значение поля в объект по его имени
            this._valuesArray[input.name] = input.value;
        });
        return this._valuesArray
    }

    setUserValue(data) {
        this._inputList.forEach(input => {
            input.value = data[input.name];
        })
    }

    setSubmitButtonText(text) {
        this._submitButton.textContent = text;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._submitFormHandler(this._getInputValues())
            this.close();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();

    }

}
