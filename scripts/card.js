import { openPopup} from "./utils.js";
import { popupImageCapture, popupImageImg, popupImage } from "./const.js";

export class Card {
  constructor (data, templateElementSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateElementSelector = templateElementSelector;
    this._cardTemplate = document.querySelector(this._templateElementSelector).content.querySelector('.card');

  }

  _fillCard() {
    this._cardCityName.textContent = this._name;
    this._cardImage.src = this._link;
}

  _likeCard () {
    this._likeCardButton.classList.toggle('card__like-button_active');
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  _imagePopupOpen () {

    openPopup(popupImage);
      
      popupImageCapture.textContent = this._cardCityName.textContent;
      popupImageImg.src = this._cardImage.src;
  
      popupImageImg.alt = this._name;
  }

  _setEventListeners() {
    this._likeCardButton.addEventListener('click', () => this._likeCard());
  
    this._deleteCardButton.addEventListener('click', () => this._deleteCard());
  
    this._cardImage.addEventListener('click', ()=> this._imagePopupOpen());

  }

  generateCard () {
    this._cardElement = this._cardTemplate.cloneNode('true');

    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardCityName = this._cardElement.querySelector('.card__city');

    this._likeCardButton = this._cardElement.querySelector('.card__like-button');
    this._deleteCardButton = this._cardElement.querySelector('.card__delete-button');

    this._fillCard();

    this._setEventListeners()

    return this._cardElement
  }
}