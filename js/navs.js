import { menu } from "./Data.js";
import { showItems } from "./menuItems.js";

const navs = menu.map(section => ({"category" :section.category, "classname" :section.className}))

const navsdiv = document.querySelector(".navs")

const loadNav = (category, classname) => {
    return `
        <div class="btn-${classname}" data-category="${category}" data-classname="${classname}">
            ${category}
        </div>
    `
}

const loadNavs = () => {
    navs.forEach((section) => {
        navsdiv.innerHTML += loadNav(section.category, section.classname)
    })
}
loadNavs();

navsdiv.addEventListener("click", (event) => {
    const clickedBtn = event.target.closest('[class^="btn-"]');
    
    if (clickedBtn) {
        const category = clickedBtn.getAttribute("data-category");
        const classname = clickedBtn.getAttribute("data-classname");
        showItems(category, classname);
    }
});
