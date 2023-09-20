export default class Card {
  constructor (data, templateSelector, openFigurePopup, handleLikeClickAdd, handleLikeClickDelete, handleDelete, userId) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._myId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this.cardPhoto = this._element.querySelector(".card__photo");
    this.cardTitle = this._element.querySelector(".card__title");
    this.cardLikeButton = this._element.querySelector(".card__like-button");
    this.cardDeleteButton = this._element.querySelector(".card__delete-button");
    this.cardLikeCount = this._element.querySelector(".card__like-count");
    this.openFigurePopup = openFigurePopup;
    this._handleDelete = handleDelete;
    this._handleLikeClickAdd = handleLikeClickAdd;
    this._handleLikeClickDelete = handleLikeClickDelete;
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
    this._checkUserLike();
    this._checkDeleteButton();
    this._setLikes();
    this._setEventListeners();
    return this._element;
  };

  //метод активации лайка
  _handleLike() {
    if (this.cardLikeButton.classList.contains('card__like-button_active')) {
      this._handleLikeClickDelete(this._id);
    } else {
      this._handleLikeClickAdd(this._id);
    }
  };

  _setLikes() {
    this.cardLikeCount.textContent = this._likes.length;
  };

  _checkUserLike() {
    this._likes.forEach(card => {
        if (card._id === this._myId) {
            this.cardLikeButton.classList.add('card__like-button_active')
            return
        }
    })
  };

  addLike(data) {
    this.cardLikeButton.classList.add('card__like-button_active');
    this._likes = data.likes;
    this._setLikes();
  }

  removeLike(data) {
    this.cardLikeButton.classList.remove('card__like-button_active');
    this._likes = data.likes;
    this._setLikes();
  }

   //метод слушателя для открытия попапа подтверждения удаления карточки
  _handleDeleteClick() {
    this._handleDelete(this._id);
  };

  //метод удаления карточки
  delete() {
    this._element.remove();
    this._element = null;
  };

  _checkDeleteButton() {
    if (this._myId === this._ownerId) {
      this.cardDeleteButton.style.display = 'block'
    } else {
      this.cardDeleteButton.style.display = 'none'
    }
  }

  _setEventListeners() {
    this.cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
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
