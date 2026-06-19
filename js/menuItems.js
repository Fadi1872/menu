import { menu } from "./Data.js";

export const showItems = (category, className) => {
    const menuItemsDev = document.querySelector('.menuItems')
    const menuItems = menu.find(section => section.category.includes(category))
    menuItemsDev.className = `bg-${className}-gradient menuItems`
    menuItemsDev.innerHTML = ""
    menuItems.items.forEach(element => {
        menuItemsDev.innerHTML += `
            <div class="nav-item">
                <p>${element.name}</p>
                <p>${element.price} ل.س</p>
            </div>
        `
    });
}