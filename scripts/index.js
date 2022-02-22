import { FormValidator } from "./FormValidator.js"
import { Card } from "./card.js";
import { openPopup, closePopup } from "./utils.js";
import { popupImage, config, cards } from "./const.js";

// модалки 
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');

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
const cardTemplateSelector = '.card-template';

// отправка формы 
function submitProfileForm(evt) {
  evt.preventDefault();

  userNameProfile.textContent = nameInputProfile.value;
  userJobProfile.textContent = jobInputProfile.value;

  closePopup(popupProfile);
};

// добавление карточки 
function addNewCard(data, list) {
  const newCard = new Card(data, cardTemplateSelector);
  const addCard = newCard.generateCard();
  list.prepend(addCard);
};

cards.forEach((data) => {
  addNewCard(data, cardsList)
});

// ресет формы 
function formReset(form) {
  form.reset();
}

// заполнение попапа профиля
function inputsPushProfile(nameInputProfile, jobInputProfile, userNameProfile, userJobProfile) {
  nameInputProfile.value = userNameProfile.textContent;
  jobInputProfile.value = userJobProfile.textContent;
};

// обработчики 
popupFormProfile.addEventListener('submit', submitProfileForm);

popupFormPlace.addEventListener('submit', (evt) => {

  evt.preventDefault();

  addNewCard({
    name: nameInputPlace.value,
    link: linkInputPlace.value
  }, cardsList);

  closePopup(popupPlace);

  formReset(popupFormPlace);
});

openButtonPopupPprofile.addEventListener('click', () => {
  openPopup(popupProfile);
  inputsPushProfile(nameInputProfile, jobInputProfile, userNameProfile, userJobProfile)

});

openButtonPopupPlace.addEventListener('click', () => {
  openPopup(popupPlace);
  formReset(popupFormPlace);

});

closeButtonPopupPprofile.addEventListener('click', () => closePopup(popupProfile));
closeButtonPopupPlace.addEventListener('click', () => closePopup(popupPlace));
closeButtonPopupImage.addEventListener('click', () => closePopup(popupImage));

// валидация 
const vallidateProfile = new FormValidator(config, popupFormProfile);
const validatePlace = new FormValidator(config, popupFormPlace);

vallidateProfile.enableValidation();
validatePlace.enableValidation();