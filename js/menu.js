//--------------------------------------------------------------
                        /* Menu */
//--------------------------------------------------------------
export const menu = () => {
    const logo = document.querySelector('.banner__logo');
    const menu = document.querySelector('.banner__menu');
    const button = document.querySelector('.banner__menu__button');
    button.addEventListener('click', () => menu.classList.toggle('active') );
    logo.addEventListener('click', () => menu.classList.toggle('active') );
};
