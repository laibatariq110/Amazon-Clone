// IMAGE SLIDER (Hero Section)
const heroSlides = document.querySelectorAll(".hero-section img");
let heroSlideIndex = 0;
let heroIntervalId = null;

document.addEventListener("DOMContentLoaded", initializeHeroSlider);

function initializeHeroSlider() {
    if (heroSlides.length > 0) {
        heroSlides[heroSlideIndex].classList.add("displaySlide");
        heroIntervalId = setInterval(nextHeroSlide, 5000);
    }
}

function showHeroSlide(index) {
    if (index >= heroSlides.length) {
        heroSlideIndex = 0;
    } else if (index < 0) {
        heroSlideIndex = heroSlides.length - 1;
    }
    heroSlides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    heroSlides[heroSlideIndex].classList.add("displaySlide");
}

function prevHeroSlide() {
    clearInterval(heroIntervalId);
    heroSlideIndex--;
    showHeroSlide(heroSlideIndex);
}

function nextHeroSlide() {
    heroSlideIndex++;
    showHeroSlide(heroSlideIndex);
}

// OTHER IMG SLIDER FOR TOYS SEC
const sliderWrapper = document.querySelector('.box-slider-imgs');
const toySlides = document.querySelectorAll('.slider-image');
let toyCurrentIndex = 0;
let imagesToShow = 6;
let toyMaxIndex;

function calculateImagesToShow(){
    const windowWidth = window.innerWidth;

    if(windowWidth <= 520){
        imagesToShow = 2.65;
    }
    else if(windowWidth <= 560){
        imagesToShow = 2.9;
    }
    else if(windowWidth <= 650){
        imagesToShow = 3.2;
    }
   else if(windowWidth <= 780){
        imagesToShow = 4;
    }
    else{
        imagesToShow = 6;
    }
    
    toyMaxIndex = toySlides.length - imagesToShow; 
    showToySlide(toyCurrentIndex);
}

// Show the slide based on the current index
function showToySlide(index) {
    const slideWidth = sliderWrapper.clientWidth / imagesToShow;
    sliderWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Go to the next slide
function nextToySlide() {
    if (toyCurrentIndex < toyMaxIndex) {
        toyCurrentIndex++;
    } else {
        toyCurrentIndex = 0; // Loop back to the beginning
    }
    showToySlide(toyCurrentIndex);
}

// Go to the previous slide
function prevToySlide() {
    if (toyCurrentIndex > 0) {
        toyCurrentIndex--;
    } else {
        toyCurrentIndex = toyMaxIndex; // Loop to the end
    }
    showToySlide(toyCurrentIndex);
}
window.addEventListener('resize', calculateImagesToShow);
calculateImagesToShow();

// NAVBAR HAMBURGER CLICK ON SMALL SCREENS
document.querySelector('.hamburger-btn').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger-menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});