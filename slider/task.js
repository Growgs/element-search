document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelector(".slider__items");
    const prevArrow = document.querySelector(".slider__arrow_prev");
    const nextArrow = document.querySelector(".slider__arrow_next");

    prevArrow.addEventListener("click", function () {
      moveToPrevSlide();
    });
  
    nextArrow.addEventListener("click", function () {
      moveToNextSlide();
    });

    function moveToPrevSlide() {
      const currentSlide = document.querySelector(".slider__item_active");
      const prevSlide = currentSlide.previousElementSibling || sliderItems.lastElementChild;
  
      currentSlide.classList.remove("slider__item_active");
      prevSlide.classList.add("slider__item_active");
    }

    function moveToNextSlide() {
      const currentSlide = document.querySelector(".slider__item_active");
      const nextSlide = currentSlide.nextElementSibling || sliderItems.firstElementChild;
  
      currentSlide.classList.remove("slider__item_active");
      nextSlide.classList.add("slider__item_active");
    }
  });
  