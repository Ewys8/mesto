import { cards, config, popupEditProfile, userName, userDescription, userInfoEditButton, userInfoEditForm,
  nameInput, descriptionInput, popupAddCard, popupAddCardOpenButton, cardAddForm, cardNameInput,
  cardURLInput, templateSelector, gallery, popupFigure, popupImage, popupFigcaption, configProfile } from "../utils/constants.js"; //импортируем данные карточек
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

const userInfo = new UserInfo(configProfile);

//задаем функцию создания карточки
const createCardElement = (data) => {
  const card = new Card(data, templateSelector, openFigurePopup); //создаём экземпляр карточки
  return card.generateCard(); //создаём карточку и возвращаем её на страницу
};

//функция открытия попапа с картинкой
const openFigurePopup = (name, link) => {
  const popupWithImage = new PopupWithImage('.popup_type_figure');
  popupWithImage.setEventListeners();
  popupWithImage.open(name, link);
};

//создадим класс, который будет заносить карточки в галерею
const renderCardElement = new Section({
  items: cards,
  renderer: (item) => {
    renderCardElement.addItem(createCardElement(item));
  },
},
gallery
);

renderCardElement.createDataArray();

const popupNewCardClass = new PopupWithForm(
  '.popup_type_add',
  addCardSubmitHandler
);
// добаление обработчиков событий для попапа
popupNewCardClass.setEventListeners();

//функция обработчик для сабмита попапа добавления карточки
function addCardSubmitHandler(formData) {
  console.log(formData);
  const name = formData.placeName;
  const link = formData.placeURL;
  cardAddForm.reset();//очищаем поля формы

  const cardData = {
    name,
    link,
  };

  renderCardElement.addItem(createCardElement(cardData));
  popupNewCardClass.close();//закрыть попап
}

//вешаем событие открытия попапа на кнопку добавления карточки
popupAddCardOpenButton.addEventListener('click', () => {
  cardAddFormValidator.hideError();
  popupNewCardClass.open();
}
);

//функция обработчик для сабмита попапа редактирования профиля
const editPopupSubmitHandler = (formData) => {
  //добавление данных из формы на страницу
  userInfo.setUserInfo({
    newName: formData.userName,
    newDescription: formData.userDescription

  })
  //закрытие формы
  popupEditProfileClass.close();
};

const popupEditProfileClass = new PopupWithForm(
  '.popup_type_edit',
  editPopupSubmitHandler
);
// добаление обработчиков событий для попапа
popupEditProfileClass.setEventListeners();

//вешаем событие на кнопку редактирования профиля
userInfoEditButton.addEventListener('click', () => {
  // открытие попапа
  popupEditProfileClass.open();
  userInfoEditFormValidator.hideError();
  //внесение данных в поля формы из данных на странице
  popupEditProfileClass.setUserValue(userInfo.getUserInfo())
});

const userInfoEditFormValidator = new FormValidator(config, userInfoEditForm);
const cardAddFormValidator = new FormValidator(config, cardAddForm);
userInfoEditFormValidator.enableValidation();
cardAddFormValidator.enableValidation();
