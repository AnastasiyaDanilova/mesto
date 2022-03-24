// модалки 
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupPlace = document.querySelector('.popup_type_place');

// формы 
export const popupFormProfile = popupProfile.querySelector('.popup__form');

// кнопки
export const openButtonPopupPprofile = document.querySelector('.button_type_edit-info');
export const openButtonPopupPlace = document.querySelector('.button_type_add-card');
export const openButtonPopupAvatar = document.querySelector('.button_type_change-avatar');

// inputs
export const nameInputProfile = popupFormProfile.querySelector('.popup__input_type_name');
export const jobInputProfile = popupFormProfile.querySelector('.popup__input_type_job');

// темплейт 
export const cardTemplateSelector = '.card-template';

export const escNumber = 27; 
//массивы

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

