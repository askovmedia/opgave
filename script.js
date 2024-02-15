// Variables and types
let slideIndex = 0; // Variable scope (including LET)
const slides = document.getElementsByClassName("slide"); // Arrays
const slideshowContainer = document.querySelector('.slideshow-container'); // Objects

// Control Structure (Loops)
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    // Control Structure (Loops)
    setTimeout(showSlides, 2000); // Functions
}
showSlides(); // Functions

// DOM (documentobjectmodel) manipulation
function handleClick(event) {
    if (event.target.tagName === 'IMG') {
        console.log('Image clicked!');
        // Events
    }
}
slideshowContainer.addEventListener('click', handleClick);

// Events
window.addEventListener('load', function() {
    console.log('Page loaded!'); // Placement and execution of KS
});