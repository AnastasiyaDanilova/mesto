import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, submitFormCallback) {
        super(popupSelector)
        this._submitFormCallback = submitFormCallback
        this._buttonDeleteConfirmation = this._popup.querySelector('.button_type_submit')
    }


    setEventListeners() {
        super.setEventListeners()
        this._buttonDeleteConfirmation.addEventListener('click', () => {
            this._submitFormCallback()
        })
    }

    // создание нового коллбэка для попапа удаления карточки
    getNewCallback(newsubmitFormCallback) {
        this._submitFormCallback = newsubmitFormCallback
    }
}


