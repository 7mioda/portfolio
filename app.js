
//--------------------------------------------------------------
                               /* Slider */
//--------------------------------------------------------------
const slider = document.querySelector('.clients-slider');
const track = slider.querySelector('.slide-track');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideWidth = slides[0].getBoundingClientRect().width;
const previous = slider.querySelector('.previous');
const next = slider.querySelector('.next');


slides.forEach((slide, index) => slide.style.left = slideWidth * index + 'px');

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length -1 ){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

previous.addEventListener('click', (event)=> {
    event.preventDefault();
    const currentSlide = slider.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    hideShowArrows(slides,previous, next, prevIndex);
});

next.addEventListener('click', (event)=> {
    event.preventDefault();
    const currentSlide = slider.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    hideShowArrows(slides,previous, next, nextIndex);
});

//--------------------------------------------------------------
                            /* Menu */
//--------------------------------------------------------------
const logo = document.querySelector('.banner__logo');
const menu = document.querySelector('.banner__menu');
const button = document.querySelector('.banner__menu__button');
button.addEventListener('click', () => menu.classList.toggle('active') );
logo.addEventListener('click', () => menu.classList.toggle('active') );
//--------------------------------------------------------------
//                          /* Scroll */
//--------------------------------------------------------------
const scroll = new SmoothScroll('a[href*="#"]', { speed: 800 });
//--------------------------------------------------------------
//                          /* Up button */
//--------------------------------------------------------------
const upBtn = document.querySelector('.up-btn');
const intro = document.querySelector('#intro');
upBtn.addEventListener('click',(event)=> {
    scroll.animateScroll(intro);
});
window.addEventListener('scroll' , (event)=> {
    if((window.pageYOffset || document.documentElement.scrollTop) > 500){
        upBtn.classList.add('active');
        upBtn.classList.remove('inactive');
    } else if (!upBtn.classList.contains('inactive')){
        upBtn.classList.add('inactive');
        upBtn.classList.remove('active');
    }
});

//--------------------------------------------------------------
//                          /* Theming */
//--------------------------------------------------------------
const domain = 'http://localhost:63342';
const styleSheets = Array.from(document.querySelectorAll('link'));
const themeToggle = document.querySelector("#cb1");

themeToggle.addEventListener('click', ()=> {
    styleSheets.forEach(styleSheet => {
        if(styleSheet.title){
            styleSheet.disabled = !styleSheet.disabled;
        }
    });
});

const setCookie = ( cookieName, cookieValue,
    lifespanInDays, validDomain ) => {
    const domainString = validDomain ?
        ("; domain=" + validDomain) : '' ;
    document.cookie = cookieName +
        "=" + encodeURIComponent( cookieValue ) +
        "; max-age=" + 60 * 60 *
        24 * lifespanInDays +
        "; path=/" + domainString ;
};

const  switchStyle = ( cssTitle ) => {
    styleSheets.forEach(styleSheet => {
        if((styleSheet.title )&& (styleSheet.title === cssTitle)){
            styleSheet.disabled = false;
        } else if (styleSheet.title ) {
            styleSheet.disabled = true;
        }
    });
    setCookie('style',cssTitle,10,domain)
};

const getCookie = ( cookieName )  => {
    const cookieString = document.cookie ;
    console.log(cookieString);
    if (cookieString.length !== 0) {
        const cookieArray = cookieString.split( '; ' );
        const cookieValue = cookieArray.filter(cookie => cookie.match ( cookieName + '=(.*)' ));
        if (cookieValue != null) {
            return decodeURIComponent (cookieValue[0]) ;
        }
    }
    return '' ;
};

const setStyleFromCookie = () => {
    const cssTitle = getCookie( 'style' );
    console.log(cssTitle)
    if (cssTitle.length) {
        switchStyle(cssTitle);
    }
};




