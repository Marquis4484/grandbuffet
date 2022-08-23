import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Grand Buffet: AboutUs");
    }

    async getHtml() {
        return `
        <div class="aboutus"> 
            <h1 class="aboutus-title">The Principals We Stand By</h1>
            <div class="principles"> <p>Excellence</p> <p>Quaility</p> <p>Quantity</p> <p>Hospitality</p> <p>Consistency</p> </div>
            <h2 class="aboutus-title-2"> By choosing to stand by these five principles, we ensure that your experience will be legendary.</h2>
        </div>`
    }
}