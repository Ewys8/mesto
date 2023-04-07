//записываем данные относящиеся к popupEdit в переменные
const popupEditProfile = document.querySelector('.popup__edit'); //попап редактирования профиля

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
};

//задаем универсальную функцию закрытия попапа
function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
};

//задаем функцию открытия попапа с заполненнными полями информации о пользователе
function editPopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
};

//вешаем событие на кнопку редактирования профиля
userInfoEditButton.addEventListener('click', () => editPopup());

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


const popupAddCard = document.querySelector('.popup__add'); //попап добавления карточки

const popupAddCardButton = document.querySelector('.profile__add-button'); //кнопка добавления новой карточки

const cardAddCloseButton = document.querySelector('.popup__close-button_card'); //кнопка закрытия попапа добавления карточки

const cardAddForm = document.querySelector('.popup__add-form'); //форма добавления новой карточки

const cardNameInput = cardAddForm.querySelector('.popup__input_type_card-name'); //инпут названия новой карточки

const cardURLInput = cardAddForm.querySelector('.popup__input_type_card-url'); //инпут url для картинки новой карточки

const cardTemplate = document.querySelector('#card-template') //темплейт

const gallery = document.querySelector('.gallery') //галерея


//записываем данные относящиеся к popupFigure в переменные

const popupFigure = document.querySelector('.popup__figure'); //попап просмотра картинки

const popupImage = document.querySelector('.popup__image'); //сама картинка

const popupFigcaption = document.querySelector('.popup__figcaption'); //подпись к картинке

const figureCloseButton = document.querySelector('.popup__close-button_figure'); //кнопка закрытия попапа просмотра карточки

//вешаем событие на кнопку закрытия попапа просмотра карточки
figureCloseButton.addEventListener('click', () => closePopup(popupFigure));




//записываем объекты карточек в массив
const cards = [
  {
    cardName: "Дудинка",
    picturelUrl: "./images/Dudinka.jpg",
  },
  {
    cardName: "Колпино",
    picturelUrl: "./images/kolpino.jpg",
  },
  {
    cardName: "Царское Село",
    picturelUrl: "./images/tsarskoeSelo.jpg",
  },
  {
    cardName: "Великий Новгород",
    picturelUrl: "./images/Novgorod.jpg",
  },
  {
    cardName: "Старая Ладога",
    picturelUrl: "./images/starayaLadoga.jpg",
  },
  {
    cardName: "Трубников Бор",
    picturelUrl: "./images/Truba.jpg",
  },
];

//вешаем событие открытия попапа на кнопку добавления карточки
popupAddCardButton.addEventListener('click', () => openPopup(popupAddCard));

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

  const cardData =   {
    cardName,
    picturelUrl,
  };

  renderCardElement(createCardElement(cardData));

  closePopup(popupAddCard); //закрыть попап
});
