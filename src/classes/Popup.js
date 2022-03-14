import { escNumber } from "../utils/const"; 

export class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._closeButton = this._popup.querySelector('.button_type_close-popup');
    };

    open () {
        this._popup.classList.add('popup_open');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close () {
        this._popup.classList.remove('popup_open');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    _handleEscClose (evt) {
        if (evt.keyCode === escNumber) {
            this.close();
        };
    };

    setEventListeners () {
        this._closeButton.addEventListener('click', () => this.close());
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget ) {
                this.close();
            };
        });
    };
};