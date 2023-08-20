export default class Card {
  constructor (data, templateSelector, openFigurePopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this.cardPhoto = this._element.querySelector(".card__photo");
    this.cardTitle = this._element.querySelector(".card__title");
    this.cardLikeButton = this._element.querySelector(".card__like-button");
    this.cardDeleteButton = this._element.querySelector(".card__delete-button");
    this.openFigurePopup = openFigurePopup;
  };

  //получаем темплейт карточки
  _getTemplate() {
    return this._templateSelector.content.querySelector('.card').cloneNode(true);
  };

  //метод подстановки данных в темплейт и установки обработчиков событий
  generateCard() {
    this.cardTitle.textContent = this._name;
    this.cardPhoto.src = this._link;
    this.cardPhoto.alt = this._name;
    this._setEventListeners();
    return this._element;
  };

  //метод активации лайка
  _handleLike() {
    this.cardLikeButton.classList.toggle('card__like-button_active');
  };

   //метод удаления карточки
  _handleDelete() {
    this._element.remove();
  };

  _setEventListeners = () => {

    this.cardDeleteButton.addEventListener('click', () => {
      this._handleDelete();
    });

    this.cardLikeButton.addEventListener('click', () => {
      this._handleLike();
    });

    this.cardPhoto.addEventListener('click', () => {
      this.openFigurePopup(this._name, this._link);
    });
  };
};
export { Card };
