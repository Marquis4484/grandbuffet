import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Grand Buffet: Menu");
    }

    async getHtml() {
        return `
        <div class="menu">
           <div class="menu-header">  
            <h1 class="menu-title">What We Serve</h1>
            <h2 class="menu-title-2">Food / Drinks</h2>
           </div> 
           <div class="menu-items"> 
            <div class="food">
              <div class="food-container-1">  
                <img src="frontend/static/css/assets/Burger.jpg" class="burger" alt="burger">
                <img src="frontend/static/css/assets/FrenchFries.jpg" class="frenchfries" alt="frenchfries">
              </div>  
              <div class="food-container-2">    
                <img src="frontend/static/css/assets/FruitBasket.jpg" class="fruitbasket" alt="fruitbasket">
                <img src="frontend/static/css/assets/Pizza.jpg" class="pizza" alt="pizza">
              </div>  
            </div>
            <div class="drinks"> 
              <div class="drink-container-1">      
                <img src="frontend/static/css/assets/Coffee.jpg" class="coffee" alt="coffee">
                <img src="frontend/static/css/assets/Cola.jpg" class="cola" alt="cola">
              </div>  
              <div class="drink-container-2">    
                <img src="frontend/static/css/assets/LemonJuice.jpg" class="lemonjuice" alt="lemonjuice">
                <img src="frontend/static/css/assets/OrangeJuice.jpg" class="orangejuice" alt="orangejuice">
              </div>  
            </div>
            </div>
         </div>
        `
    }
}