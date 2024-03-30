document.addEventListener('DOMContentLoaded', function() {
    const textItems = document.querySelectorAll('.text-item');
    let currentIndex = 0;
  
    // Show initial text item
    textItems[currentIndex].classList.add('active');
  
    // Function to navigate to the previous text item
    function showPreviousText() {
      textItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + textItems.length) % textItems.length;
      textItems[currentIndex].classList.add('active');
    }
  
    // Function to navigate to the next text item
    function showNextText() {
      textItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % textItems.length;
      textItems[currentIndex].classList.add('active');
    }
  
    // Event listeners for the buttons
    document.querySelector('.prev-button').addEventListener('click', showPreviousText);
    document.querySelector('.next-button').addEventListener('click', showNextText);
  });