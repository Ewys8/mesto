class FormValidator { //принимает  конфиг и форму
  constructor (config, form) {
    this.config = config;
    this.form = form;
    this.inputs = Array.from(this.form.querySelectorAll(config.inputSelector));//инпуты в форме
    this.popupSubmitButton = this.form.querySelector(config.submitButtonSelector);//кнопка
  };

  //метод показывает сообщение об ошибке
_showInputError(input) {
  const errorElement = this.form.querySelector(`#error-${input.id}`)
  input.classList.add(this.config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
};

//метод убирает сообщение об ошибке
_hideInputError(input) {
  const errorElement = this.form.querySelector(`#error-${input.id}`)
  input.classList.remove(this.config.inputErrorClass)
  errorElement.textContent = '';
};

//метод проверяет инпут на валидность
_checkInputValidity(input) {
  if (input.validity.valid) {
    this._hideInputError(input);
  } else {
    this._showInputError(input);
  }
};

  //неактивная кнопка сабмита
_setButtonDisable() {
  this.popupSubmitButton.setAttribute('disabled', '');
  this.popupSubmitButton.classList.add(this.config.inactiveButtonClass);
};

//активная кнопка сабмита
_setButtonEnable() {
  this.popupSubmitButton.removeAttribute('disabled');
  this.popupSubmitButton.classList.remove(this.config.inactiveButtonClass);
};

//функция переключающая состояния сабмита
_toggleButtonValidity() {
if (this.form.checkValidity()) {
  this._setButtonEnable()
} else {
  this._setButtonDisable();
}
};
    _setEventListeners = () => {
      this._toggleButtonValidity();
      this.inputs.forEach((input) => {
        input.addEventListener('input', () => {
          this._checkInputValidity(input);
          this._toggleButtonValidity();
        });
      });
    };

  //метод enableValidation, чтобы включить валидацию
  enableValidation = () => {
    this._setEventListeners();
  };
};
export { FormValidator };
