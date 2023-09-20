import { config, userInfoEditButton, userInfoEditForm, popupAddCardOpenButton, cardAddForm,
templateSelector, gallery, configProfile, popupAvatarEditButton, userAvatarEditForm, optionsApi } from "../utils/constants.js"; //импортируем данные карточек
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from '../components/UserInfo.js';
import Api from "../components/Api.js";
import './index.css';
let userId;


const api = new Api(optionsApi);

const userInfo = new UserInfo(configProfile);

//задаем функцию создания карточки
const createCardElement = (data) => {
  const card = new Card(data, templateSelector, openFigurePopup, 
    (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          card.addLike(data);
        })
        .catch((error) => { console.log(error) });
    },
    (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.removeLike(data);
        })
        .catch((error) => { console.log(error) });
    },
    (cardId) => {
      popupConfirm.open();
      popupConfirm.setSubmit(() => {
        popupConfirm.setSubmitButtonText('Удаление...');
          api.deleteCard(cardId)
              .then(() => {
                  card.delete();
                  popupConfirm.close()
              })
              .catch((error => console.error(`Не получилось удалить карточку ${error}`)))
              .finally(() => {
                popupConfirm.setSubmitButtonText('Да');
              });
      })
  },
    userId)
  return card.generateCard(); //создаём карточку и возвращаем её на страницу
};

const popupWithImage = new PopupWithImage('.popup_type_figure');
const openFigurePopup = (name, link) => {
  popupWithImage.open(name, link);
};

//создадим класс, который будет заносить карточки в галерею
const renderCardElement = new Section(
  (item) => {
    renderCardElement.addItem(createCardElement(item));
  },
gallery
);

const popupNewCardClass = new PopupWithForm(
  '.popup_type_add',
  addCardSubmitHandler
);

const popupEditProfileClass = new PopupWithForm(
  '.popup_type_edit',
  editPopupSubmitHandler
);

const popupEditAvatarClass = new PopupWithForm(
  '.popup_type_edit-avatar',
  editAvatarSubmitHandler
);

const popupConfirm = new PopupWithConfirmation(
  '.popup_type_delete-confirm'
);

//===========================_функции_обработчики_для_сабмита_попапов_==========================

function editPopupSubmitHandler (formData) {
  console.log(formData);
  popupEditProfileClass.setSubmitButtonText('Сохранение...');
  //добавление данных из формы на страницу
  api.editUserData(formData)
  .then((response) =>{
    userInfo.setUserInfo({newName: response.name, newDescription: response.about});
    popupEditProfileClass.close();
  })
  .catch((error) => {console.log(error)})
  .finally(() => {
    popupEditProfileClass.setSubmitButtonText('Создать');
  });
};

function addCardSubmitHandler(formData) {
  console.log(formData);
  cardAddForm.reset();//очищаем поля формы
  popupNewCardClass.setSubmitButtonText('Сохранение...');
  api.createCard(formData)
  .then((cardData) =>{
    renderCardElement.addItem(createCardElement(cardData));
    popupNewCardClass.close();
  })
  .catch((error) => {console.log(error)})
  .finally(() => {
    popupNewCardClass.setSubmitButtonText('Создать');
  });
};

function editAvatarSubmitHandler (formData) {
  console.log(formData);
  popupEditAvatarClass.setSubmitButtonText('Сохранение...');
  api.editUserAvatar(formData)
  .then((response) =>{
    userInfo.setUserAvatar({avatar: response.avatar});
    popupEditAvatarClass.close();
  })
  .catch((error) => {console.log(error)})
  .finally(() => {
    popupEditAvatarClass.setSubmitButtonText('Создать');
  });
};
//=======================================================================================



//===========================_устанавливаем_слушатели_кнопок_==========================

userInfoEditButton.addEventListener('click', () => {
  popupEditProfileClass.open();
  userInfoEditFormValidator.hideError();
  //внесение данных в поля формы из данных на странице
  popupEditProfileClass.setUserValue(userInfo.getUserInfo())
});

popupAddCardOpenButton.addEventListener('click', () => {
  cardAddFormValidator.hideError();
  popupNewCardClass.open();
});

popupAvatarEditButton.addEventListener('click', () => {
  avatarEditFormValidator.hideError();
  popupEditAvatarClass.open();
});
//=======================================================================================

//===========================_устанавливаем_валидацию_полей_ввода_==========================
const userInfoEditFormValidator = new FormValidator(config, userInfoEditForm);
const cardAddFormValidator = new FormValidator(config, cardAddForm);
const avatarEditFormValidator = new FormValidator(config, userAvatarEditForm);
userInfoEditFormValidator.enableValidation();
cardAddFormValidator.enableValidation();
avatarEditFormValidator.enableValidation();
//==========================================================================================

//===========================_устанавливаем_слушатели_событий==========================
popupEditProfileClass.setEventListeners();
popupNewCardClass.setEventListeners();
popupWithImage.setEventListeners();
popupEditAvatarClass.setEventListeners();
popupConfirm.setEventListeners();
//==========================================================================================


Promise.all([api.getUserData(), api.getCards()])
  .then(([userData, cardsData]) => {
    userId = userData._id;
    // получение информации о пользователе
    userInfo.setId(userData._id);
    userInfo.setUserInfo({ newName: userData.name, newDescription: userData.about});
    userInfo.setUserAvatar({ avatar: userData.avatar });
    // получение карточек
    renderCardElement.createDataArray(cardsData);
  })
  .catch((error) => { console.log(error) });