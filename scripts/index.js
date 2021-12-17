const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');


function openClose() {
    popup.classList.toggle('popup_open');
}

popupOpenButton.addEventListener('click',openClose);
popupCloseButton.addEventListener('click',openClose);