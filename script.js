let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[n].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

showSlide(currentSlide);