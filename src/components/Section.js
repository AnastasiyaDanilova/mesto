export class Section {
    constructor ({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    renderItems(itemsList) {
        itemsList.forEach(item => {
            this._renderer(item)});
    };

    addItem(element) {
        this._container.prepend(element);
    };
    
    //   clear() {
    //     this._element = null;
    //   }
    
    //   renderItems(items) {
    //     this.clear();
    
    //     items.forEach((item) => {
    //       this._renderer(item);
    //     });
    //   }
};