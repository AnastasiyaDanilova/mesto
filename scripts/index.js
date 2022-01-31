
// модалки 
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const popupImage = document.querySelector('.popup_type_image');
const allPopups = document.querySelectorAll('.popup');

// формы 
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupFormPlace = popupPlace.querySelector('.popup__form');

// кнопки
const openButtonPopupPprofile = document.querySelector('.button_type_edit-info');
const closeButtonPopupPprofile = popupProfile.querySelector('.button_type_close-popup');
const openButtonPopupPlace = document.querySelector('.button_type_add-card');
const closeButtonPopupPlace = popupPlace.querySelector('.button_type_close-popup');
const closeButtonPopupImage = popupImage.querySelector('.button_type_close-popup');
const submitPopupPlace = popupFormPlace.querySelector('.button_type_submit-place');

// html поля
const userNameProfile = document.querySelector('.profile__name');
const userJobProfile = document.querySelector('.profile__description');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageCapture = popupImage.querySelector('.popup__fig-caption');

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

// открытие попапа

function openPopup (popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEscape);
  closePopupOverlayClick(popup);
};

// закрытие попапа, закрытие оверлей и escape 

function closePopup (popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEscape);
};

function closePopupOverlayClick (popup) {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    };
  });
};

function closePopupEscape (evt) {
  if (evt.keyCode === 27 || evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open');
    closePopup(openedPopup);
  };
};

// скрытие ошибки при закрытии попапа
function errorHide (popup) {

  const inputList = popup.querySelectorAll('.popup__input');
  const errorList = popup.querySelectorAll('.popup__error');

  inputList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });

  errorList.forEach((errorElement) =>{
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
  })
};

// отправка формы 

function submitProfileForm(evt) {
  evt.preventDefault();

  userNameProfile.textContent = nameInputProfile.value;
  userJobProfile.textContent = jobInputProfile.value;

  closePopup(popupProfile);
};

 
// создание и добавление карточки 

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardCityName = cardElement.querySelector('.card__city');
  const cardImage = cardElement.querySelector('.card__image');
  const likeCardButton = cardElement.querySelector('.card__like-button');
  const deleteCardButton = cardElement.querySelector('.card__delete-button');

  cardCityName.textContent = card.name;
  cardImage.src = card.link;
  
  cardImage.alt = card.name;

  likeCardButton.addEventListener('click', () => {
    const targetElement = evt.target;

    targetElement.classList.toggle('card__like-button_active');
  });

  deleteCardButton.addEventListener('click', (evt) => {
    const deletedItem = deleteCardButton.closest('.card');

    deletedItem.remove();
  });

  cardImage.addEventListener('click', (evt) => {
    openPopup(popupImage);
    
    popupImageCapture.textContent = cardCityName.textContent;
    popupImageImg.src = cardImage.src;

    popupImageImg.alt = card.name;
  });

  return cardElement;
};

function addNewCard (card) {
  const newCard = createCard(card);
  cardsList.prepend(newCard);
};

cards.forEach(addNewCard);

// ресет формы 

function formReset (form) {
  form.reset();
}

// обработчики 

popupFormPlace.addEventListener('submit', (evt) => {

  evt.preventDefault();

  addNewCard({
    name: nameInputPlace.value,
    link: linkInputPlace.value
  });

  closePopup(popupPlace);

  formReset (popupFormPlace);
});
  

function inputsPushProfile (nameInputProfile, jobInputProfile, userNameProfile, userJobProfile) {
  nameInputProfile.value = userNameProfile.textContent;
  jobInputProfile.value= userJobProfile.textContent;
};

openButtonPopupPprofile.addEventListener('click', () => {
  openPopup(popupProfile);
  inputsPushProfile(nameInputProfile, jobInputProfile, userNameProfile, userJobProfile)
  errorHide (popupProfile);
});

openButtonPopupPlace.addEventListener('click', () => {
  openPopup(popupPlace);
  formReset (popupFormPlace);
  errorHide (popupPlace);
});

popupFormProfile.addEventListener('submit', submitProfileForm);
closeButtonPopupPprofile.addEventListener('click', () => closePopup(popupProfile));
closeButtonPopupPlace.addEventListener('click', () => closePopup(popupPlace));
closeButtonPopupImage.addEventListener('click', () => closePopup(popupImage));





