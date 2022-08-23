import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Grand Buffet: Locations");
    }

    async getHtml() {
        return`
        <div class="location">
            <h1 class="location-title-1">Where We Serve</h1>
            <div class="locations">
                <div class="location-container-1">
                    <img src="frontend/static/css/assets/Elwood.png" class="elewood" alt="location1">
                    <h2 class="location-title-2">El E. Wood Drive</h2>
                    <h2 class="location-title-2">Ax, 12345</h2>
                </div>
                <div class="location-container-2">
                    <img src="frontend/static/css/assets/ShortBeach.png" class="lindis" alt="location2">
                    <h2 class="location-title-2">Lindis Spring</h2>
                    <h2 class="location-title-2">AP, 54321</h2>
                </div>
                <div class="location-container-3">
                    <img src="frontend/static/css/assets/Stedside.png" class="hector" alt="location3">
                    <h2 class="location-title-2">Hectorian Valley</h2>
                    <h2 class="location-title-2">AI, 10111</h2>
                </div>
            </div>    
        </div>
        `
    }
}