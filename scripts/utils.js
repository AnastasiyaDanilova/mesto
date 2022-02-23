import { escNumber } from "./const.js";

// открытие попапа
export function openPopup (popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', closePopupEscape);
};

// закрытие попапа, закрытие оверлей и escape 
export function closePopup (popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupEscape);
  };
  
export function closePopupEscape (evt) {
    if (evt.keyCode === escNumber) {
      const openedPopup = document.querySelector('.popup_open');
      closePopup(openedPopup);
    };
  };
  