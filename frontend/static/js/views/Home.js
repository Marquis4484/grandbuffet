import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Grand Buffet: Home");
    }

    async getHtml() {
        return`
        <div class="home">
            <h2 class="home-title">At Grand Buffet, we provide</h2>
            <h1 class="home-title-2">Legendary Service With a 5 <a href='/aboutus'data-link> Star</a> Rating </h1>
            <h2 class="home-title-3">Click <a href="/ordernow" data-link>Here</a> to order from our business.</h2>
        <div>    
            `
    }
}