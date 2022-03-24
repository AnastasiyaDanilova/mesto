import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormCallback) {
        super(popupSelector)
        this._submitFormCallback = submitFormCallback
        this._popupForm = this._popup.querySelector('.popup__form')
        this._inputs = [...this._popupForm.querySelectorAll('.popup__input')]
        this._values = {}
        this._submitButton = this._popupForm.querySelector('.button_type_submit')
        this._popupDeleteClass =  ''

    }

    // кнопка 'Сохранение...'
    setSaveButton() {
        this._submitButton.classList.add('button_type_saved')
    }

    removeSaveButton() {
        this._submitButton.classList.remove('button_type_saved')
    }

    // получение данных инпутов
    _getInputValues() {
        this._inputs.forEach((input) => {
            this._values[input.name] = input.value
        });

        return this._values
    };

    // создание нового коллбэка для попапа удаления карточки
    getNewCallback(newsubmitFormCallback) {
        this._submitFormCallback = newsubmitFormCallback
    }
    
    // слушатели
    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', () => {
            this._submitFormCallback(this._getInputValues())
            // this._setSaveButton()
        })
    }

    // закрытие попапа и ресет формы
    close() {
        super.close()
        this._popupForm.reset()
    }
}