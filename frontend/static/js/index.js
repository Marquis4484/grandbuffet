import AboutUs from "./views/AboutUs.js";
import Home from "./views/Home.js";
import OrderNow from "./views/OrderNow.js";
import Menu from "./views/Menu.js";
import Locations from "./views/Locations.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path:"/", view:  Home},
        {path:"/aboutus",view: AboutUs},
        {path:"/menu", view: Menu},
        {path:"/locations", view: Locations},
        {path:"/ordernow", view: OrderNow},
    ];

    // Test routes
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(match.route.view());
};

window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded", () => { // once DOM is loaded
    document.body.addEventListener("click", e => { // click event
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});

const toggleButton = document.getElementsByClassName('toggle-button')[0] // Hamburger button
const tabs = document.getElementsByClassName('tabs')[0]

toggleButton.addEventListener('click', () => {
  tabs.classList.toggle('active')
})