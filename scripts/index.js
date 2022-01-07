// модалки 
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');

// формы 
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupFormPlace = popupPlace.querySelector('.popup__form');

// кнопки
const OpenButtonPopupPprofile = document.querySelector('.button_type_edit-info');
const CloseButtonPopupPprofile = popupProfile.querySelector('.button_type_close-popup');

const OpenButtonPopupPlace = document.querySelector('.button_type_add-card');
const CloseButtonPopupPlace = popupPlace.querySelector('.button_type_close-popup');

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

//array
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

function formSubmitProfile (evt) {
  evt.preventDefault();

  userNameProfile.textContent = nameInputProfile.value;
  userJobProfile.textContent = jobInputProfile.value;
    
  togglePopup(popupProfile);
}

function createCard (card) {
  const cardElement = cardTemplate.cloneNode(true);
  
  cardElement.querySelector('.card__city').textContent = card.name;
  cardElement.querySelector('.card__image').src = card.link;
    
  cardsList.prepend(cardElement)
};

cards.forEach(createCard);

popupFormPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();

  createCard({
    name: nameInputPlace.value,
    link: linkInputPlace.value
  });

  togglePopup(popupPlace);

  popupFormPlace.reset();
})

popupFormProfile.addEventListener('submit', formSubmitProfile)
OpenButtonPopupPprofile.addEventListener('click',() => togglePopup(popupProfile));
CloseButtonPopupPprofile.addEventListener('click',() => togglePopup(popupProfile));

OpenButtonPopupPlace.addEventListener('click',() => togglePopup(popupPlace));
CloseButtonPopupPlace.addEventListener('click',() => togglePopup(popupPlace));