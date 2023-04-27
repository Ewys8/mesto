//функция показывает сообщение об ошибке
function showInputError(config, input, errorElement) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = input.validationMessage;
};

//функция убирает сообщение об ошибке
function hideInputError(config, input, errorElement) {
  input.classList.remove(config.inputErrorClass)
  errorElement.textContent = '';
};

//функция проверяет инпут на валидность
function checkInputValidity(config, input, form) {
  const errorElement = form.querySelector(`#error-${input.id}`)
  if (input.validity.valid) {
    hideInputError(config, input, errorElement);
  } else {
    showInputError(config, input, errorElement);
  }
};

//неактивная кнопка сабмита
function setButtonDisable(config, button) {
    button.setAttribute('disabled', '');
    button.classList.add(config.inactiveButtonClass);
};

//активная кнопка сабмита
function setButtonEnable(config, button) {
  button.removeAttribute('disabled');
  button.classList.remove(config.inactiveButtonClass);
};

//функция переключающая состояния сабмита
function toggleButtonValidity(config, form) {
  const popupSubmitButton = form.querySelector(config.submitButtonSelector)

  if (form.checkValidity()) {
    setButtonEnable(config, popupSubmitButton)
  } else {
    setButtonDisable(config, popupSubmitButton);
  }
};

const setEventListeners = (config, form) => {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  toggleButtonValidity(config, form);
  inputs.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(config, input, form);
      toggleButtonValidity(config, form);
    });
  });
};

function enableValidation (config, form) {
  const forms = Array.from(document.querySelectorAll(config.formSelector)); //записываем все формы в псевдомассив
  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    setEventListeners(config, form)
  });
};

enableValidation({
formSelector: '.form',
inputSelector: '.popup__input',
submitButtonSelector: '.popup__submit-button',
inactiveButtonClass: 'popup__submit-button_disabled',
inputErrorClass: 'popup__input_invalid',
errorClass: 'error-message_active'
});
