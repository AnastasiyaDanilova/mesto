
export class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._errorClass = settings.errorClass;
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._inputErrorClass = settings.inputErrorClass;
        this._popupErrorSelector = settings.popupErrorSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
        this._inputList = this._form.querySelectorAll(this._inputSelector);
        this._errorList = this._form.querySelectorAll(this._popupErrorSelector);
    };

    // скрыть/показать кнопку отправки формы
    _disableSubmitButton() {
        this._buttonSubmit.setAttribute('disabled', '');
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
    };

    _unDisableSubmitButton() {
        this._buttonSubmit.removeAttribute('disabled');
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
    };

    // скрыть кнопку при отправке формы
    _disableButtonWhenSubmit() {
        this._form.addEventListener('submit', () => {
            this._disableSubmitButton();
        });
    };

    // показать/скрыть ошибку 
    _showError(input, error) {
        input.classList.add(this._inputErrorClass);
        error.classList.add(this._errorClass);
        error.textContent = input.validationMessage;
    };

    _inputHideError(input) {
        input.classList.remove(this._inputErrorClass);
    }

    _errorHideError(error) {
        error.classList.remove(this._errorClass);
        error.textContent = '';
    }

    _hideError(input, error) {
        this._inputHideError(input);
        this._errorHideError(error);
    };

    // скрыть ошибку при открытии окна после закрытия
    _errorHideWhenOpen() {
        this._inputList.forEach((input) => {
            this._inputHideError(input);
        });

        this._errorList.forEach((errorElement) => {
            this._errorHideError(errorElement);
        });
    };

    // валидация кнопки 
    _toggleButtonError() {
        const validOrNotForm = this._form.checkValidity();

        if (!validOrNotForm) {
            this._disableSubmitButton();
        } else {
            this._unDisableSubmitButton();
        };
    };

    // валидация инпутов
    _isValid(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`)

        if (!inputElement.validity.valid) {
            this._showError(inputElement, errorElement);
        } else {
            this._hideError(inputElement, errorElement);
        };
    };

    // слушатели для инпутов
    _inputsEventListeners() {
        const inputList = this._form.querySelectorAll(this._inputSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonError();
            });
        });
    };

    // слушатель на кнопки открытия попапов 
    // (проверка валидации кнопки и скрытие ошибки при открытии)
    _popupButtonsWhenOpen() {
        const button = document.querySelector(`.${this._form.id}-button`);

        button.addEventListener('click', () => {
            this._toggleButtonError();
            this._errorHideWhenOpen();
            this._disableButtonWhenSubmit();
        });
    };

    enableValidation() {
        this._inputsEventListeners();
        this._popupButtonsWhenOpen();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })
    };
};