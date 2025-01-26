let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const visibleItems = 2; // Number of items visible at once
    if (index >= slides.length / visibleItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = Math.ceil(slides.length / visibleItems) - 1;
    } else {
        currentIndex = index;
    }
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100 / visibleItems}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
