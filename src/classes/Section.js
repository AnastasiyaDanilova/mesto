export class Section {
    constructor ({ items, renderer}, containerSelector) {
        this._itemsList = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    renderItems() {
        this._itemsList.forEach(item => {
            this._renderer(item, this._container)});
    };

    addItem(element) {
        this._container.prepend(element);
    };
};