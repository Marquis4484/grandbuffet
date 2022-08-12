import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("OrderNow");
    }

    async getHtml() {
        return `
       <h1>Howdy</h1>
       `
    }
}