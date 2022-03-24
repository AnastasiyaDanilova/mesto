import '../page/index.css'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js";
import { config, cards, formValidators, openButtonPopupPprofile, openButtonPopupPlace, nameInputProfile, jobInputProfile, cardTemplateSelector } from "../utils/const.js";
import {api} from '../components/Api.js';
import { data } from 'autoprefixer';

let userId;

Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cardList, userData]) => { 
    profileValue.setUserInfo(userData.name, userData.about);
    cardList.reverse();
    userId = userData._id


    cardList.forEach(data => {
      const card = createConstCard(data);
      section.addItem(card)
    })


  })

// отправка формы
function submitProfileForm(data) {
  const { name, job } = data;

  api.editProfile(name, job)
  .then(() => {
    profileValue.setUserInfo(name, job)
    popupTypeProfile.close()
  })
};

function submitPlaceForm(data) {
  api.addCard(data['place-name'], data.link)
  .then((res) => {
    const card = createConstCard(res);
    section.addItem(card);
    popupTypePlace.close();
  })
  
};

// вызов createCard

function createConstCard (data) {
  const card = createCard({
    name: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id
  })
  // console.log(data.owner._id, userId)
  return card
} 


// содание карточки
function createCard (data) {
  const newCard = new Card(
    data,
    cardTemplateSelector,
    () => {
      popupTypeImage.open(data.link, data.name)
    },
    (id) => {
      console.log(id)
      popupTypeDelete.open()
      popupTypeDelete.getNewCallback(() => {
        api.deleteCard(id)
        .then(res => {
          newCard.deleteCard()
          popupTypeDelete.close()

        })
      })
    }
  );
  return newCard.generateCard();
}

// добавление карточки 
function addNewCard(data) {
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

const section = new Section({renderer: addNewCard}, '.cards__list');
const popupTypeImage = new PopupWithImage ('.popup_type_image');
const popupTypeProfile = new PopupWithForm ('.popup_type_profile', submitProfileForm);
const popupTypePlace = new PopupWithForm ('.popup_type_place', submitPlaceForm);
const popupTypeDelete = new PopupWithForm ('.popup_type_delete');


popupTypeImage.setEventListeners();
popupTypeProfile.setEventListeners();
popupTypePlace.setEventListeners();
popupTypeDelete.setEventListeners();

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