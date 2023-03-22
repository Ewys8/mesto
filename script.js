const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const userName = document.querySelector('.profile__name')
const userDescription = document.querySelector('.profile__description')

editButton.addEventListener('click', function() {
  editPopup.classList.add('popup_open');
  nameInput.value = userName.innerHTML;
  descriptionInput.value = userDescription.innerHTML;
})


closeButton.addEventListener('click', function() {
  editPopup.classList.remove('popup_open');
})


saveButton.addEventListener('click', function() {
  editPopup.classList.remove('popup_open');
  const name = nameInput.value;
  userName.innerHTML = name;
  const description = descriptionInput.value;
  userDescription.innerHTML = description;
})
