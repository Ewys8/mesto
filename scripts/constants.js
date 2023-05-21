const cards = [
  {
    name: "Дудинка",
    link: "./images/Dudinka.jpg",
  },
  {
    name: "Колпино",
    link: "./images/kolpino.jpg",
  },
  {
    name: "Царское Село",
    link: "./images/tsarskoeSelo.jpg",
  },
  {
    name: "Великий Новгород",
    link: "./images/Novgorod.jpg",
  },
  {
    name: "Старая Ладога",
    link: "./images/starayaLadoga.jpg",
  },
  {
    name: "Трубников Бор",
    link: "./images/Truba.jpg",
  },
];

const config = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error-message_active'
  };

export { cards, config };
