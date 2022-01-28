
const preventDefault = (evt) => {
    evt.preventDefault();
    console.log('prevent Default')
}

const showError = (input, errorElement, {inputErrorClass, errorClass}) => {

    input.classList.add(inputErrorClass); 
    errorElement.classList.add(errorClass);
    errorElement.textContent = input.validationMessage;
    console.log('753');
}

const hideError = (input, errorElement, {inputErrorClass, errorClass}) => {

    input.classList.remove(inputErrorClass); 
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
    console.log('456');
}

const isValid = (form, input, classes) => {

    const errorElement = form.querySelector(`.${input.id}-error`)
    
    if (!input.validity.valid) {
        showError(input, errorElement, classes);
    } else {
        hideError(input, errorElement, classes);
    }

    console.log('im valid )))');
}

const inputsEventListeners = (form, {inputSelector, inputErrorClass, errorClass}) => {

    const inputList = form.querySelectorAll(inputSelector);
        
        inputList.forEach((input) => {

            input.addEventListener('input', () =>{

                isValid(form, input, {inputErrorClass, errorClass});
            });

            console.log('im input');
        });
};

const enableValidation = ({formSelector, inputSelector, inputErrorClass, errorClass}) => {

    const formList = document.querySelectorAll(formSelector); 

    formList.forEach((form)=> {
        form.addEventListener('submit', preventDefault);
        console.log('for each form');

        inputsEventListeners(form, {inputSelector, inputErrorClass, errorClass});
        
    })
    console.log('enable');

}


enableValidation ({
    formSelector: '.popup__form', 
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error', 
    errorClass: 'popup__error_visible',
}); 
    




















// enableValidation ({
//     formSelector: '.popup__form', 
//     inputSelector: '.popup__input', 
//     submitButtonSelector: '.button_type_submit', 
//     inactiveButtonClass: 'button_type_submit-inactive', 
//     inputErrorClass: 'popup__input_type_error', 
//     errorClass: 'popup__error_visible' 
//   }); 

