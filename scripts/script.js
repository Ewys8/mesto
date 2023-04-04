const userInfoEditButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup__type_edit');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

const userInfoEditForm = document.querySelector('.popup__edit-form');

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
};

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
};


function editPopup() {
  openPopup(popupEditProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
};

userInfoEditButton.addEventListener('click', () => editPopup());


popupCloseButton.addEventListener('click', () => closePopup(popupEditProfile));



userInfoEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closePopup(popupEditProfile);
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
});

const popupAddCard = document.querySelector('.popup__type_add');
