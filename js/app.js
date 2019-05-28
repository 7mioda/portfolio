import scroll from './scroll';
import { themeProvider, switchStyle } from "./theming";
import { slider } from "./slider";
import { menu } from "./menu";
import { scrollButton } from "./scrollButton";
import VanillaTilt from "vanilla-tilt";

window.onload = () => {
    const theme = localStorage.getItem( 'theme' );
        if(theme === "dark") {
            document.querySelector(".toggle").checked = true;
        }
    switchStyle(theme);
};
scrollButton();
menu();
themeProvider();
slider();
const elements = Array.from(document.querySelectorAll(".js-tilt"));
VanillaTilt.init(elements, {
    max: 25,
    speed: 400
});

