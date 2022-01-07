

/////////////////////////////////////////////////////

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card-template').content;

/*gh5^*/
  const placeNameInput = popupPlaces.querySelector('.popup__input_type_name');
  const placeLinkInput = popupPlaces.querySelector('.popup__input_type_job');
  const placeNameCard = popupPlaces.querySelector('.card__city');
  const placeLinkCard = popupPlaces.querySelector('.card__image');
  const placeSubmitForm = popupPlaces.querySelector('.popup__form')
  const openAddCardButton = document.querySelector('.button_type_add-card');
  const closeAddCardButton = popupPlaces.querySelector('.button_type_close-popup');



cards.forEach(function (card) {
  const cardElement = cardTemplate.cloneNode(true);
  
  cardElement.querySelector('.card__city').textContent = card.name;
  cardElement.querySelector('.card__image').src = card.link;
    
  cardsList.append(cardElement);
});

function createCard () {
  const cardElement = cardTemplate.cloneNode(true);

  placeNameCard.textContent = placeNameInput.value;
  placeLinkCard.src = jobInput.value;
}

function addCard () {
  cardsList.prepend(createCard());
  addCardPopupClose();
}


console.log(cards);

function addCardPopupOpen () {
  popupPlaces.classList.add('popup_open');
}

function addCardPopupClose() {
  popupPlaces.classList.remove('popup_open');
}
openAddCardButton.addEventListener('click',addCardPopupOpen);
closeCardAdd.addEventListener('click',addCardPopupClose);
placeSubmitForm.addEventListener('click', addCard)