import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Grand Buffet: OrderNow");
    }

    async getHtml() {
        return ` 
        <div class="ordernow">
            <h1 class="ordernow-title">Pickup or Takeout</h1>
            <h2 class="ordernow-title-2">Call us at 505-555-5555 and receive your order at no additional cost! </h2>
            <h2 class="ordernow-title-3">We appreciate your business with us!</h2>
        </div>
       `
    }
}