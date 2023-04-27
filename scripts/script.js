import { cards } from "./constants.js"; //импортируем данные карточек

//записываем данные относящиеся к popupEdit в переменные
const popupEditProfile = document.querySelector('.popup_type_edit'); //попап редактирования профиля

const userName = document.querySelector('.profile__name'); //имя пользователя

const userDescription = document.querySelector('.profile__description'); //описание профиля

const userInfoEditButton = document.querySelector('.profile__edit-button'); //кнопка редактирования

const profileCloseButton = document.querySelector('.popup__close-button_profile'); //кнопка закрытия

const userInfoEditForm = document.querySelector('.popup__edit-form'); //форма редактирования

const nameInput = document.querySelector('.popup__input_type_name'); //инпут userName

const descriptionInput = document.querySelector('.popup__input_type_description'); //инпут userDescription

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
userInfoEditButton.addEventListener('click', () => openEditPopup());

//вешаем событие на кнопку закрытие попапа редактирования профиля
profileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));

//вешаем событие на форму редактирования профиля
userInfoEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closePopup(popupEditProfile);
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
});

//записываем данные относящиеся к popupAdd в переменные
const popupAddCard = document.querySelector('.popup_type_add'); //попап добавления карточки

const popupAddCardOpenButton = document.querySelector('.profile__add-button'); //кнопка добавления новой карточки

const cardAddCloseButton = document.querySelector('.popup__close-button_card'); //кнопка закрытия попапа добавления карточки

const cardAddForm = document.querySelector('.popup__add-form'); //форма добавления новой карточки

const cardNameInput = cardAddForm.querySelector('.popup__input_type_card-name'); //инпут названия новой карточки

const cardURLInput = cardAddForm.querySelector('.popup__input_type_card-url'); //инпут url для картинки новой карточки

const cardTemplate = document.querySelector('#card-template') //темплейт

const gallery = document.querySelector('.gallery') //галерея

//записываем данные относящиеся к popupFigure в переменные
const popupFigure = document.querySelector('.popup_type_figure'); //попап просмотра картинки

const popupImage = document.querySelector('.popup__image'); //сама картинка

const popupFigcaption = document.querySelector('.popup__figcaption'); //подпись к картинке

const figureCloseButton = document.querySelector('.popup__close-button_figure'); //кнопка закрытия попапа просмотра карточки

//вешаем событие на кнопку закрытия попапа просмотра карточки
figureCloseButton.addEventListener('click', () => closePopup(popupFigure));

//вешаем событие открытия попапа на кнопку добавления карточки
popupAddCardOpenButton.addEventListener('click', () => openPopup(popupAddCard));

//вешаем событие на кнопку закрытия попапа добавления карточки
cardAddCloseButton.addEventListener('click', () => closePopup(popupAddCard));

//задаем функцию создания карточки
const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content.querySelector('.card').cloneNode(true); //копия карточки из темплейта

  const cardTitle = cardElement.querySelector('.card__title'); //имя карточки
  const cardPhoto = cardElement.querySelector('.card__photo'); //фото карточки

  const cardDeleteButton = cardElement.querySelector('.card__delete-button'); //кнопка удаления карточки
  const cardLikeButton = cardElement.querySelector('.card__like-button'); //кнопка лайка

  //записываем в название карточки и ее фото данные из объектов массива
  cardTitle.textContent = cardData.cardName;
  cardPhoto.src = cardData.picturelUrl;
  cardPhoto.alt = cardData.cardName;

  const handleDelete = () => {
    cardElement.remove();
  };

  const handleLike = () => {
    cardLikeButton.classList.toggle('card__like-button_active')
  };

  //вешаем обработчик события на кнопку удаления карточки
  cardDeleteButton.addEventListener('click', handleDelete);

  //вешаем обработчик события на кнопку лайка карточки
  cardLikeButton.addEventListener('click', handleLike);

  //пишем функция открытия попапа с картинкой
  const openFigurePopup = () => {
        openPopup(popupFigure);
        popupImage.src = cardPhoto.src;
        popupImage.alt = cardPhoto.alt;
        popupFigcaption.textContent = cardTitle.textContent;
      };

    //Обработчик открытия попапа просмотра изображения
  cardPhoto.addEventListener("click", openFigurePopup);

  return cardElement;
};

//пишем функцию, которая будет заносить карточки с элементами в галерею
const renderCardElement = (cardElement) => {
  gallery.prepend(cardElement);
}

cards.forEach((card) => {
  renderCardElement(createCardElement(card));
})

//вешаем событие на форму добавления карточки
cardAddForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const cardName = cardNameInput.value;
  const picturelUrl = cardURLInput.value;

  //очищаем поля формы
  cardAddForm.reset();

  const cardData =   {
    cardName,
    picturelUrl,
  };

  renderCardElement(createCardElement(cardData));
  closePopup(popupAddCard); //закрыть попап
  event.target.reset();
  event.submitter.classList.add('popup__submit-button_disabled');
  event.submitter.disabled = true;
});

const popupsArray = Array.from(document.querySelectorAll('.popup'))//псевдомассив попапов

popupsArray.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  });
});
