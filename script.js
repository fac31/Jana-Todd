// JavaScript for carousel functionality
const carousels = document.querySelectorAll('.carousel');

const moveSlidesBack = (slides) => {
  console.log("the function was called")
  slides.scrollBy({
      left: -slides.offsetWidth,
      behavior: 'smooth'
  });
}

const moveSlidesForth = (slides) => {
  slides.scrollBy({
      left: slides.offsetWidth,
      behavior: 'smooth'
  });
}

carousels.forEach((carousel) => {
  let prevButton = carousel.querySelector('.prev');
  let nextButton = carousel.querySelector('.next');
  let slides = carousel.querySelector('.slides');

  prevButton.addEventListener("click", () => moveSlidesBack(slides))
  nextButton.addEventListener("click", () => moveSlidesForth(slides))
})
