import  { scroll } from "./scroll";
//--------------------------------------------------------------
//                          /* Scroll button */
//--------------------------------------------------------------
export const scrollButton = () => {
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
};
