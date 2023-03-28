const userInfoEditButton = document.querySelector('.profile__edit-button');
const userInfoEditPopup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');

const userInfoEditForm = document.querySelector('.popup__form');

function editPopup() {
  userInfoEditPopup.classList.add('popup_open');
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
};

userInfoEditButton.addEventListener('click', () => editPopup());

function closePopup() {
  userInfoEditPopup.classList.remove('popup_open');
};

popupCloseButton.addEventListener('click', () => closePopup());



userInfoEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closePopup();
  const name = nameInput.value;
  userName.textContent = name;
  const description = descriptionInput.value;
  userDescription.textContent = description;
});
