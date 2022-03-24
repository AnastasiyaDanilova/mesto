
export class Card {
  constructor(data, templateElementSelector, handleCardClick, handleDeleteClicked) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId,
    this._ownerId = data.ownerId

    this._handleDeleteClicked = handleDeleteClicked;
    this._templateElementSelector = templateElementSelector;
    this._cardTemplate = document.querySelector(this._templateElementSelector).content.querySelector('.card');
    this._handleCardClick = handleCardClick;

  };

  // заполнение  
  _fillCard() {
    this._cardCityName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  };

  // лайк 
  _likeCard() {
    this._likeCardButton.classList.toggle('card__like-button_active');
  };

  // удаление
  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  };

  // обработчики 
  _setEventListeners() {
    this._likeCardButton.addEventListener('click', () => this._likeCard());

    this._deleteCardButton.addEventListener('click', () => this._handleDeleteClicked(this._id));

    this._cardImage.addEventListener('click', () => this._handleCardClick());
  };

  // лайки 
  _setLikes() {

    this._likeElement = this._cardElement.querySelector('.card__like-count');

    this._likeElement.textContent = this._likes.length;


  }
  // создание карточки 
  generateCard() {
    this._cardElement = this._cardTemplate.cloneNode('true');

    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardCityName = this._cardElement.querySelector('.card__city');

    this._likeCardButton = this._cardElement.querySelector('.card__like-button');
    this._deleteCardButton = this._cardElement.querySelector('.card__delete-button');

    this._fillCard();

    this._setEventListeners()

    this._setLikes()

    if(this._ownerId !== this._userId) {
      this._deleteCardButton.style.display = 'none'
    } 

    return this._cardElement
  };
};