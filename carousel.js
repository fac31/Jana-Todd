// JavaScript for carousel functionality
const carousels = document.querySelectorAll('.carousel');

const moveSlidesBack = (slides, prev, next) => {
  slides.scrollBy({
      left: -slides.offsetWidth,
      behavior: 'smooth'
  })
  if(slides.scrollLeft === slides.offsetWidth) {
    prev.disabled = true
  } else {
    next.disabled = false
  }
}

const moveSlidesForth = (slides, prev, next) => {
  slides.scrollBy({
      left: slides.offsetWidth,
      behavior: 'smooth'
  });
}

carousels.forEach((carousel) => {
  let prevButton = carousel.querySelector('.prev');
  let nextButton = carousel.querySelector('.next');
  let slides = carousel.querySelector('.slides');

  prevButton.addEventListener("click", () => moveSlidesBack(slides, prevButton, nextButton))
  nextButton.addEventListener("click", () => moveSlidesForth(slides, prevButton, nextButton))
  prevButton.disabled = true;
})
