export const popupImage = document.querySelector('.popup_type_image');
export const popupImageCapture = popupImage.querySelector('.popup__fig-caption');
export const popupImageImg = popupImage.querySelector('.popup__image');

// модалки 
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupPlace = document.querySelector('.popup_type_place');

// формы 
export const popupFormProfile = popupProfile.querySelector('.popup__form');
export const popupFormPlace = popupPlace.querySelector('.popup__form');

// кнопки
export const openButtonPopupPprofile = document.querySelector('.button_type_edit-info');
export const openButtonPopupPlace = document.querySelector('.button_type_add-card');

// inputs
export const nameInputProfile = popupFormProfile.querySelector('.popup__input_type_name');
export const jobInputProfile = popupFormProfile.querySelector('.popup__input_type_job');

// темплейт 
export const cardTemplateSelector = '.card-template';

export const escNumber = 27;
//массивы
export const cards = [
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

export const formValidators = {};

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_type_submit-inactive',
    buttonOpenProfileSelector: '.button_type_edit-info',
    buttonOpenPlaceSelector: '.button_type_add-card',
    popupErrorSelector: '.popup__error'
};

