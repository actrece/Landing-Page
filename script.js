// JavaScript for the slider buttons
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const slidesContainer = document.querySelector('.slides-container');

// Function to show the current slide based on the index
function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  }
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Event listeners for the buttons
prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});
