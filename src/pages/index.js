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

// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
/*import Dudinka from '../images/Dudinka.jpg';
import Kolpino from '../images/kolpino.jpg';
import Truba from '../images/Truba.jpg';
import Novgorod from '../images/Novgorod.jpg';
import StarayaLadoga from '../images/starayaLadoga.jpg';
import TsarskoeSelo from '../images/tsarskoeSelo.jpg';

/*const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Dudinka', link: Dudinka },
  { name: 'Kolpino', link: Kolpino },
  { name: 'Truba', link: Truba },
];*/

const userInfo = new UserInfo(configProfile);

//задаем функцию создания карточки
const createCardElement = (data) => {
  const card = new Card(data, templateSelector, openFigurePopup); //создаём экземпляр карточки
  const cardElement = card.generateCard(); //создаём карточку и возвращаем её на страницу
  return cardElement;
};

//функция открытия попапа с картинкой
const openFigurePopup = (name, link) => {
  const popupWithImage = new PopupWithImage(popupFigure, name, link);
  popupWithImage.setEventListeners();
  popupWithImage.open();
};

//создадим класс, который будет заносить карточки в галерею
const renderCardElement = new Section({
  items: cards,
  renderer: (item) => createCardElement(item),
},
gallery
);

renderCardElement.createDataArray();

const popupNewCardClass = new PopupWithForm(
  popupAddCard,
  addCardSubmitHandler
);
// добаление обработчиков событий для попапа
popupNewCardClass.setEventListeners();

//функция обработчик для сабмита попапа добавления карточки
function addCardSubmitHandler(event) {

  const name = cardNameInput.value;
  const link = cardURLInput.value;
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
const editPopupSubmitHandler = () => {
  //добавление данных из формы на страницу
  userInfo.setUserInfo({
    newName: nameInput.value,
    newDescription: descriptionInput.value
  })
  //закрытие формы
  popupEditProfileClass.close();
};

const popupEditProfileClass = new PopupWithForm(
  popupEditProfile,
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
