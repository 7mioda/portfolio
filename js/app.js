import scroll from './scroll'
import { themeProvider, setStyleFromStorage } from "./theming";
import { slider } from "./slider";
import { menu } from "./menu";
import { scrollButton } from "./scrollButton";
import VanillaTilt from "vanilla-tilt";

document.onload = () => setStyleFromStorage();
scrollButton();
menu();
themeProvider();
slider();
const elements = Array.from(document.querySelectorAll(".js-tilt"));
VanillaTilt.init(elements, {
    max: 25,
    speed: 400
});

