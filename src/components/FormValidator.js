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
    };

    // скрыть/показать кнопку отправки формы
    _disableSubmitButton() {
        this._buttonSubmit.setAttribute('disabled', '');
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
    };

    _activateButton() {
        this._buttonSubmit.removeAttribute('disabled');
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
    };

    // показать/скрыть ошибку 
    _showError(input, error) {
        input.classList.add(this._inputErrorClass);
        error.classList.add(this._errorClass);
        error.textContent = input.validationMessage;
    };

    _hideError(input, error) {
        input.classList.remove(this._inputErrorClass);
        error.classList.remove(this._errorClass);
        error.textContent = '';
    };

    // скрыть ошибку при открытии окна после закрытия
    _errorHideWhenOpen() {
        this._inputList.forEach((input) => {
            const inputErrorElement = this._form.querySelector(`.${input.id}-error`);
            this._hideError(input, inputErrorElement);
        });
    };

    // валидация кнопки 
    _toggleButtonError() {
        const validOrNotForm = this._form.checkValidity();

        if (!validOrNotForm) {
            this._disableSubmitButton();
        } else {
            this._activateButton();
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
    _setEventListeners() {

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonError();
            });
        });
    };

    // слушатель на кнопки открытия попапов 
    // (проверка валидации кнопки и скрытие ошибки при открытии)
    _setOpenButtonListeners() {
        const button = document.querySelector(`.${this._form.id}-button`);

        if (button) {
            button.addEventListener('click', () => {
                this._toggleButtonError();
                this._errorHideWhenOpen();
            });
        };
    };

    enableValidation() {
        this._setEventListeners();
        this._setOpenButtonListeners();
        
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._disableSubmitButton();
        })
    };
};