import '../page/index.css'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js";
import { config, cards, formValidators, openButtonPopupPprofile, openButtonPopupPlace, nameInputProfile, jobInputProfile, cardTemplateSelector } from "../utils/const.js";

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
  section.addItem(addCard);
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
    jobElementSelector: '.profile__description'}
);

// Валидация
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);