import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


export const menu = () => {
    const logo = document.querySelector('.banner__logo');
    const menu = document.querySelector('.banner__menu');
    const menuItems = Array.from(document.querySelectorAll('.banner__menu__menu-item'));
    const button = document.querySelector('.banner__menu__button');

    const openMenu = () => {
        menu.classList.toggle('active')
        disableBodyScroll(menu);
    }

    const closeMenu = () => {
        menu.classList.toggle('active')
        enableBodyScroll(menu);
    }

    button.addEventListener('click', closeMenu);
    logo.addEventListener('click', openMenu);
    menuItems.forEach(item => item.addEventListener('click', closeMenu));
};
