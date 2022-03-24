import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormCallback) {
        super(popupSelector);
        this._submitFormCallback = submitFormCallback;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputs = [...this._popupForm.querySelectorAll('.popup__input')];
        this._values = {};
    };

    _getInputValues() {
        this._inputs.forEach((input) => {
            this._values[input.name] = input.value;
        });

        return this._values;
    };

    getNewCallback(newsubmitFormCallback) {
        this._submitFormCallback = newsubmitFormCallback;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', () => {
            this._submitFormCallback(this._getInputValues());
        });
    };

    close() {
        super.close();
        this._popupForm.reset();
    };
};