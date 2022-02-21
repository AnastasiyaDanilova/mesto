// открытие попапа
export function openPopup (popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', closePopupEscape);
    closePopupOverlayClick(popup);
};

// закрытие попапа, закрытие оверлей и escape 
export function closePopup (popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupEscape);
  };

  function closePopupOverlayClick (popup) {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget) {
        closePopup(popup);
      };
    });
  };
  
export function closePopupEscape (evt) {
    if (evt.keyCode === 27 ) {
      const openedPopup = document.querySelector('.popup_open');
      closePopup(openedPopup);
    };
  };
  