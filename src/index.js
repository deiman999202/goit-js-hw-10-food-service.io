import { classBody } from "babel-types"
import myMenu from "./food-menus.hbs"
import menus from "./menu.json"

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.getElementById("theme-switch-toggle")
const body = document.body

if (localStorage.getItem("background-color") === Theme.DARK) {
    switcher.checked = true
}


body.classList.add(localStorage.getItem("background-color"))
switcher.addEventListener("change", onSwitcherChange)


const menuCreator = myMenu(menus)

const mainMenu = document.querySelector(".menu.js-menu")


mainMenu.insertAdjacentHTML('beforeend', menuCreator)

function onSwitcherChange() {
    if (localStorage.getItem("background-color") === Theme.DARK) {
        body.classList.remove(localStorage.getItem("background-color"))
        localStorage.setItem("background-color", Theme.LIGHT)
        body.classList.add(localStorage.getItem("background-color"))
    }
    else {
        body.classList.remove(localStorage.getItem("background-color"))
        localStorage.setItem("background-color", Theme.DARK)
        body.classList.add(localStorage.getItem("background-color"))
    }
}
