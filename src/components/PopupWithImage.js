import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
    constructor (popupSelector){
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__image');
        this._caption = this._popup.querySelector('.popup__fig-caption');
    }
    open (link, text) {
        super.open();
        this._image.src = link;
        this._caption.textContent = text;
        this._image.alt = text;
    };
};