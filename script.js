// JavaScript for carousel functionality
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

prevButton.addEventListener('click', () => {
    slides.scrollBy({
        left: -slides.offsetWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    slides.scrollBy({
        left: slides.offsetWidth,
        behavior: 'smooth'
    });
});

const carousel = document.querySelector('.slides');
const altText = document.querySelector('.alt-text');

// Add event listener for carousel change (e.g., on slide change)
carousel.addEventListener('change', () => {
  const currentImage = carousel.querySelector('img.active');
  altText.textContent = currentImage.alt;
});