import { cards, config, popupEditProfile, userName, userDescription, userInfoEditButton, userInfoEditForm,
  nameInput, descriptionInput, popupAddCard, popupAddCardOpenButton, cardAddForm, cardNameInput,
  cardURLInput, templateSelector, gallery, popupFigure, popupImage, popupFigcaption } from "./constants.js"; //импортируем константы
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
console.log(FormValidator);

//задаем универсальную функцию открытия попапа
function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupByEsc);
};

//задаем универсальную функцию закрытия попапа
function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupByEsc);
};

//закрытие попапа по ESC
function closePopupByEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
};

//задаем функцию открытия попапа с заполненнными полями информации о пользователе
function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
};

//вешаем событие на кнопку редактирования профиля
userInfoEditButton.addEventListener('click', () => {
  userInfoEditFormValidator.hideError();
  openEditPopup();
});

//функция обработчик для сабмита попапа редактирования профиля
function editPopupSubmitHandler(event) {
  event.preventDefault();
  closePopup(popupEditProfile);
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
}
//вешаем событие на форму редактирования профиля
userInfoEditForm.addEventListener('submit', editPopupSubmitHandler);

//вешаем событие открытия попапа на кнопку добавления карточки
popupAddCardOpenButton.addEventListener('click', () => {
  cardAddFormValidator.hideError();
  cardAddForm.reset();
  openPopup(popupAddCard);
});

//задаем функцию создания карточки
const createCardElement = (data) => {
  const card = new Card(data, templateSelector, openFigurePopup); //создаём экземпляр карточки
  const cardElement = card.generateCard(); //создаём карточку и возвращаем её на страницу
  return cardElement;
};

//функция открытия попапа с картинкой
function openFigurePopup(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupFigcaption.textContent = name;
  openPopup(popupFigure);
}

//пишем функцию, которая будет заносить карточки с элементами в галерею
const renderCardElement = (cardElement) => {
  gallery.prepend(cardElement);
}

cards.forEach((card) => {
  renderCardElement(createCardElement(card));
})

//функция обработчик для сабмита попапа добавления карточки
function addCardSubmitHandler(event) {
  event.preventDefault();
  const name = cardNameInput.value;
  const link = cardURLInput.value;
  cardAddForm.reset();//очищаем поля формы

  const cardData = {
    name,
    link,
  };

  renderCardElement(createCardElement(cardData));
  closePopup(popupAddCard); //закрыть попап
}
//вешаем событие на форму добавления карточки
cardAddForm.addEventListener('submit', addCardSubmitHandler);

const popupsArray = Array.from(document.querySelectorAll('.popup'))//псевдомассив попапов

//закрытие попапа по крестику или оверлэю
popupsArray.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});

const userInfoEditFormValidator = new FormValidator(config, userInfoEditForm);
const cardAddFormValidator = new FormValidator(config, cardAddForm);
userInfoEditFormValidator.enableValidation();
cardAddFormValidator.enableValidation();
