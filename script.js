document.addEventListener('DOMContentLoaded', () => {
  // Your JavaScript code here
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const slidesContainer = document.querySelector('.slides-container');

  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    }
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    console.log("showSlide called with index:", index); // Added for debugging
  }

  showSlide(currentSlide); // Initial display

  prevButton.addEventListener('click', () => {
    console.log("prevButton clicked"); // Added for debugging
    currentSlide--;
    showSlide(currentSlide);
  });

  nextButton.addEventListener('click', () => {
    console.log("nextButton clicked"); // Added for debugging
    currentSlide++;
    showSlide(currentSlide);
  });
});