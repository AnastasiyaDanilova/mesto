const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

const namePage = document.querySelector('.profile__name');
const jobPage = document.querySelector('.profile__description');

function popupOpen() {
    popup.classList.add('popup_open');

    nameInput.value = namePage.textContent;
    jobInput.value = jobPage.textContent;
}

function popupClose() {
    popup.classList.remove('popup_open');
}

popupOpenButton.addEventListener('click',popupOpen);
popupCloseButton.addEventListener('click',popupClose);





const popupForm = document.querySelector('.popup__form');

const nameInput = popupForm.querySelector('.popup__input_name');
const jobInput = popupForm.querySelector('.popup__input_job');

const popupButton = popupForm.querySelector('.submit-button');



function saveNameJob (evt) {
    
    evt.preventDefault();

    namePage.textContent = nameInput.value;
    jobPage.textContent = jobInput.value;
    popupButton.addEventListener('click', popupClose);
}

popupForm.addEventListener('submit', saveNameJob); 
popupForm.addEventListener('click', saveNameJob);




