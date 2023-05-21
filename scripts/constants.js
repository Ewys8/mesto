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

  //записываем данные относящиеся к popupEdit в переменные
const popupEditProfile = document.querySelector('.popup_type_edit'); //попап редактирования профиля
const userName = document.querySelector('.profile__name'); //имя пользователя
const userDescription = document.querySelector('.profile__description'); //описание профиля
const userInfoEditButton = document.querySelector('.profile__edit-button'); //кнопка редактирования
const userInfoEditForm = document.querySelector('.popup__edit-form'); //форма редактирования
const nameInput = document.querySelector('.popup__input_type_name'); //инпут userName
const descriptionInput = document.querySelector('.popup__input_type_description'); //инпут userDescription

//записываем данные относящиеся к popupAdd в переменные
const popupAddCard = document.querySelector('.popup_type_add'); //попап добавления карточки
const popupAddCardOpenButton = document.querySelector('.profile__add-button'); //кнопка добавления новой карточки
const cardAddForm = document.querySelector('.popup__add-form'); //форма добавления новой карточки
const cardNameInput = cardAddForm.querySelector('.popup__input_type_card-name'); //инпут названия новой карточки
const cardURLInput = cardAddForm.querySelector('.popup__input_type_card-url'); //инпут url для картинки новой карточки
const templateSelector = document.querySelector('#card-template') //темплейт
const gallery = document.querySelector('.gallery') //галерея

//записываем данные относящиеся к popupFigure в переменные
const popupFigure = document.querySelector('.popup_type_figure'); //попап просмотра картинки
const popupImage = document.querySelector('.popup__image'); //сама картинка
const popupFigcaption = document.querySelector('.popup__figcaption'); //подпись к картинке

export { cards, config, popupEditProfile, userName, userDescription, userInfoEditButton, userInfoEditForm,
  nameInput, descriptionInput, popupAddCard, popupAddCardOpenButton, cardAddForm, cardNameInput,
  cardURLInput, templateSelector, gallery, popupFigure, popupImage, popupFigcaption };
