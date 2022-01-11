// модалки 
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupImage = document.querySelector('.popup_type_image');

// формы 
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupFormPlace = popupPlace.querySelector('.popup__form');

// кнопки
const openButtonPopupPprofile = document.querySelector('.button_type_edit-info');
const closeButtonPopupPprofile = popupProfile.querySelector('.button_type_close-popup');
const openButtonPopupPlace = document.querySelector('.button_type_add-card');
const closeButtonPopupPlace = popupPlace.querySelector('.button_type_close-popup');
const closeButtonPopupImage = popupImage.querySelector('.button_type_close-popup');

// html поля
const userNameProfile = document.querySelector('.profile__name');
const userJobProfile = document.querySelector('.profile__description');

// inputs
const nameInputProfile = popupFormProfile.querySelector('.popup__input_type_name');
const jobInputProfile = popupFormProfile.querySelector('.popup__input_type_job');
const nameInputPlace = popupFormPlace.querySelector('.popup__input_type_name');
const linkInputPlace = popupFormPlace.querySelector('.popup__input_type_job');

// карточки список и темплейт
const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;

//массив
const cards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function togglePopup(popup) {
  popup.classList.toggle('popup_open');
}

function submitProfileForm(evt) {
  evt.preventDefault();

  userNameProfile.textContent = nameInputProfile.value;
  userJobProfile.textContent = jobInputProfile.value;

  togglePopup(popupProfile);
}

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardCityName = cardElement.querySelector('.card__city');
  const cardImage = cardElement.querySelector('.card__image');
  const likeCardButton = cardElement.querySelector('.card__like-button');
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  const popupImageImg = popupImage.querySelector('.popup__image');
  const popupImageCapture = popupImage.querySelector('.popup__fig-caption');

  cardCityName.textContent = card.name;
  cardImage.src = card.link;
  
  cardImage.alt = card.name;

  likeCardButton.addEventListener('click', (evt) => {
    const targetElement = evt.target;

    targetElement.classList.toggle('card__like-button_active');
  });

  deleteCardButton.addEventListener('click', (evt) => {
    const deletedItem = deleteCardButton.closest('.card');

    deletedItem.remove();
  });

  cardImage.addEventListener('click', (evt) => {
    togglePopup(popupImage);
    
    popupImageCapture.textContent = cardCityName.textContent;
    popupImageImg.src = cardImage.src;
    
    popupImageImg.alt = card.name;
  });

  return cardElement;
};

function addNewCard (card) {
  const newCard = createCard(card);
  cardsList.prepend(newCard);
} 

cards.forEach(addNewCard);

popupFormPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();

  addNewCard({
    name: nameInputPlace.value,
    link: linkInputPlace.value
  });

  togglePopup(popupPlace);

  popupFormPlace.reset();
})

popupFormProfile.addEventListener('submit', submitProfileForm);
openButtonPopupPprofile.addEventListener('click', () => togglePopup(popupProfile));
closeButtonPopupPprofile.addEventListener('click', () => togglePopup(popupProfile));
openButtonPopupPlace.addEventListener('click', () => togglePopup(popupPlace));
closeButtonPopupPlace.addEventListener('click', () => togglePopup(popupPlace));
closeButtonPopupImage.addEventListener('click', () => togglePopup(popupImage));