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

// OTHER IMG SLIDER FOR TOYS SECconst sliderWrapper = document.querySelector('.box-slider-imgs');
const toySlides = document.querySelectorAll('.slider-image');
let toyCurrentIndex = 0;
let imagesToShow = 6;
let toyMaxIndex;

// Calculate the number of images to show based on screen size
function calculateImagesToShow() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 520) imagesToShow = 2; // Show 2 images on very small screens
    else if (windowWidth <= 768) imagesToShow = 3; // Show 3 images on tablets
    else if (windowWidth <= 1024) imagesToShow = 4; // Show 4 images on smaller laptops
    else imagesToShow = 6; // Default: 6 images

    toyMaxIndex = Math.max(0, toySlides.length - imagesToShow); // Prevent negative maxIndex
    showToySlide(toyCurrentIndex); // Adjust slider after recalculating
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

// Initialize and update on resize
window.addEventListener('resize', calculateImagesToShow);
calculateImagesToShow();


// NAVBAR HAMBURGER CLICK ON SMALL SCREENS
document.querySelector('.hamburger-btn').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger-menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});