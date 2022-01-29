
// отмена отправки формы

const preventDefault = (evt) => {
    evt.preventDefault();
};

// проверка кнопки

const toggleButtonError = (form, { submitButtonSelector, inactiveButtonClass }) => {
    const buttonSubmit = form.querySelector(submitButtonSelector);
    const validOrNotForm = form.checkValidity();
    if (!validOrNotForm) {
        buttonSubmit.classList.add(inactiveButtonClass);
        buttonSubmit.setAttribute('disabled', '');
    } else {
        buttonSubmit.classList.remove(inactiveButtonClass);
        buttonSubmit.removeAttribute('disabled');
    };
};


// показать/скрыть ошибку
const showError = (input, errorElement, { inputErrorClass, errorClass }) => {
    input.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = input.validationMessage;
};

const hideError = (input, errorElement, { inputErrorClass, errorClass }) => {
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

// проверка на валидность + отображение ошибки

const isValid = (form, input, classes) => {
    const errorElement = form.querySelector(`.${input.id}-error`)

    if (!input.validity.valid) {
        showError(input, errorElement, classes);
    } else {
        hideError(input, errorElement, classes);
    };

    toggleButtonError(form, classes);
};

// запуск валидации для инпутов
const inputsEventListeners = (form, { inputSelector, ...rest }) => {

    const inputList = form.querySelectorAll(inputSelector);

    inputList.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(form, input, rest);
        });
    });
};

// запуск валидации для форм 
const enableValidation = ({ formSelector, ...rest }) => {

    const formList = document.querySelectorAll(formSelector);

    formList.forEach((form) => {
        form.addEventListener('submit', preventDefault);
        console.log('for each form');

        inputsEventListeners(form, rest);
        toggleButtonError(form, rest);
    });
};


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    submitButtonSelector: '.button_type_submit',
    inactiveButtonClass: 'button_type_submit-inactive',
});





















// enableValidation ({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.button_type_submit',
//     inactiveButtonClass: 'button_type_submit-inactive',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }); 

