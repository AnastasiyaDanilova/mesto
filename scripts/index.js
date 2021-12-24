const popupOpenButton = document.querySelector('.button_type_edit-info');
const popupCloseButton = document.querySelector('.button_type_close-popup');
const popup = document.querySelector('.popup');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__description');
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_type_name');
const jobInput = popupForm.querySelector('.popup__input_type_job');

function popupOpen() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;

    popup.classList.add('popup_open');
}

function popupClose() {
    popup.classList.remove('popup_open');
}


function formSubmitHandler (evt) {
    evt.preventDefault();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    
    popupClose();
}

popupForm.addEventListener('submit', formSubmitHandler); 
popupOpenButton.addEventListener('click',popupOpen);
popupCloseButton.addEventListener('click',popupClose);