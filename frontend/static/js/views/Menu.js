import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Menu");
    }

    async getHtml() {
        return `
        <h1>Location</h1>
        `
    }
}