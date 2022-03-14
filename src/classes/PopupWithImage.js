import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
    open (link, text) {
        super.open();

        const image = this._popup.querySelector('.popup__image');
        const caption = this._popup.querySelector('.popup__fig-caption');

        image.src = link;
        caption.textContent = text;
    };
};