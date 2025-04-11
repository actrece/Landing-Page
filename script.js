document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const slidesContainer = document.querySelector('.slides-container');

  function showSlide(index) {
    if (index < 0) currentSlide = totalSlides - 1;
    else if (index >= totalSlides) currentSlide = 0;
    else currentSlide = index;

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  showSlide(currentSlide); // Initialize to first slide
});
