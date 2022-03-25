import '../page/index.css'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { Section } from '../components/Section.js'
import { FormValidator } from "../components/FormValidator.js"
import { Card } from "../components/Card.js"
import { config, openButtonPopupAvatar, formValidators, openButtonPopupPprofile, openButtonPopupPlace, nameInputProfile, jobInputProfile, cardTemplateSelector } from "../utils/const.js"
import { api } from '../components/Api.js'
import { data } from 'autoprefixer';
import {PopupWithConfirmation} from '../components/PopupWithConfirmation.js'

let userId

Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cardList, userData]) => {
    profileValue.setUserInfo(userData.name, userData.about)
    profileValue.setAvatar(userData.avatar)
    cardList.reverse()
    userId = userData._id

    cardList.forEach(data => {
      const card = createConstCard(data)
      section.addItem(card)
    })
  }).catch(console.log)

// отправка форм
function submitProfileForm(data) {
  api.editProfile(data.name, data.job)
    .then((res) => {
      profileValue.setUserInfo(res.name, res.about)
      popupTypeProfile.close()
    })
    .catch(console.log)
    .finally(() => {
      popupTypeProfile.removeSaveButton()
    })
}

function submitPlaceForm(data) {

  api.addCard(data['place-name'], data.link)
    .then((res) => {
      const card = createConstCard(res)
      section.addItem(card)
      popupTypePlace.close()

    })
    .catch(console.log)
    .finally(() => {
      popupTypePlace.removeSaveButton()
    })
};

function submitAvatarForm(data) {
  api.changeAvatar(data.link)
    .then((res) => {
      profileValue.setAvatar(res.avatar)
      popupTypeAvatar.close()
    })
    .catch(console.log)
    .finally(() => {
      popupTypeAvatar.removeSaveButton()
    })
};

// вызов createCard
function createConstCard(data) {
  const card = createCard({
    name: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id
  })
  return card
}

// содание карточки
function createCard(data) {
  const newCard = new Card(
    data,
    cardTemplateSelector,
    () => {
      popupTypeImage.open(data.link, data.name)
    },
    (id) => {
      popupTypeDelete.open()
      popupTypeDelete.getNewCallback(() => {
        api.deleteCard(id)
          .then(res => {
            console.log('res', res)
            newCard.deleteCard()
            popupTypeDelete.close()
          }).catch(console.log)
      })
        
    },
    (id) => {
      if (newCard.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            newCard.setLikes(res.likes)
          }).catch(console.log)
      } else {
        api.addLike(id)
          .then(res => {
            newCard.setLikes(res.likes)
          }).catch(console.log)
      }
    }
  )
  return newCard.generateCard()
}

// добавление карточки 
function addNewCard(data) {
  const addCard = createCard(data)
  section.addItem(addCard)
}

// классы 
const section = new Section({ renderer: addNewCard }, '.cards__list')
const popupTypeImage = new PopupWithImage('.popup_type_image')
const popupTypeProfile = new PopupWithForm('.popup_type_profile', submitProfileForm)
const popupTypePlace = new PopupWithForm('.popup_type_place', submitPlaceForm)
const popupTypeDelete = new PopupWithConfirmation('.popup_type_delete')
const popupTypeAvatar = new PopupWithForm('.popup_type_avatar', submitAvatarForm)

const profileValue = new UserInfo({
  nameElementSelector: '.profile__name',
  jobElementSelector: '.profile__description',
  avatarElementSelector: '.profile__photo'
}
)

// обработчики классов 
popupTypeImage.setEventListeners()
popupTypeProfile.setEventListeners()
popupTypePlace.setEventListeners()
popupTypeDelete.setEventListeners()
popupTypeAvatar.setEventListeners()

// обработчики открытия
openButtonPopupPprofile.addEventListener('click', () => {
  popupTypeProfile.open()
  const { name, job, } = profileValue.getUserInfo()
  nameInputProfile.value = name
  jobInputProfile.value = job

});

openButtonPopupPlace.addEventListener('click', () => {
  popupTypePlace.open()
});

openButtonPopupAvatar.addEventListener('click', () => {
  popupTypeAvatar.open()
});

// Валидация
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  console.log(formList)
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')

    formValidators[formName] = validator
    validator.enableValidation()
  })
}

enableValidation(config)