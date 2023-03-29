const userInfoEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

const userInfoEditForm = document.querySelector('.popup__form');

function editPopup() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
};

userInfoEditButton.addEventListener('click', () => editPopup());

function closePopup() {
  popupProfile.classList.remove('popup_opened');
};

popupCloseButton.addEventListener('click', () => closePopup());



userInfoEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closePopup();
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
});
