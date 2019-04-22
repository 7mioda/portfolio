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


