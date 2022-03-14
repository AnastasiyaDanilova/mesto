import '../page/index.css'
import { PopupWithImage } from '../classes/PopupWithImage.js'
import { PopupWithForm } from '../classes/PopupWithForm.js'
import { UserInfo } from '../classes/UserInfo.js';
import { Section } from '../classes/Section.js';
import { FormValidator } from "../classes/FormValidator.js"
import { Card } from "../classes/Card.js";
import { config, cards} from "../utils/const.js";

// модалки 
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');

// формы 
const popupFormProfile = popupProfile.querySelector('.popup__form');
const popupFormPlace = popupPlace.querySelector('.popup__form');

// кнопки
const openButtonPopupPprofile = document.querySelector('.button_type_edit-info');
const openButtonPopupPlace = document.querySelector('.button_type_add-card');

// inputs
const nameInputProfile = popupFormProfile.querySelector('.popup__input_type_name');
const jobInputProfile = popupFormProfile.querySelector('.popup__input_type_job');

// темплейт 
const cardTemplateSelector = '.card-template';

// отправка формы 
function submitProfileForm(data) {
  const { name, job } = data;
  profileValue.setUserInfo(name, job);
  popupTypeProfile.close();
};

function submitPlaceForm(data) {
  const card = createCard({
    name: data['place-name'],
    link: data.link
  }); 

  section.addItem(card);
  popupTypePlace.close();
};

// содание карточки 
function createCard (data) {
  const newCard = new Card(data, cardTemplateSelector, () => {
    popupTypeImage.open(data.link, data.name)
  });
  return newCard.generateCard();
}

// добавление карточки 
function addNewCard(data, list) {
  const addCard = createCard (data);
  list.prepend(addCard);
};

// обработчики открытия
openButtonPopupPprofile.addEventListener('click', () => {
  popupTypeProfile.open();
  const { name, job } = profileValue.getUserInfo();
  nameInputProfile.value = name;
  jobInputProfile.value = job

});

openButtonPopupPlace.addEventListener('click', () => {
  popupTypePlace.open();
});

// валидация 
const vallidateProfile = new FormValidator(config, popupFormProfile);
const validatePlace = new FormValidator(config, popupFormPlace);

vallidateProfile.enableValidation();
validatePlace.enableValidation();

// классы 
const section = new Section({items: cards, renderer: addNewCard}, '.cards__list');
const popupTypeImage = new PopupWithImage ('.popup_type_image');
const popupTypeProfile = new PopupWithForm ('.popup_type_profile', submitProfileForm);
const popupTypePlace = new PopupWithForm ('.popup_type_place', submitPlaceForm);

popupTypeImage.setEventListeners();
popupTypeProfile.setEventListeners();
popupTypePlace.setEventListeners();

section.renderItems();

const profileValue = new UserInfo ({
  nameElementSelector: '.profile__name',
  jobElementSelector: '.profile__description'});

 