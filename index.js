(function () {
  const navToggle = document.querySelector(".page-header__toggle");
  const navMain = document.querySelector(".main-nav");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  })
})();

(function () {
  const reviews = document.querySelectorAll('.review__list');
  const slideButtonsParent = document.querySelector('.slider__list');
  const slideButtons = document.querySelectorAll('button[data-content]');
  // const arrowSliderParent = document.querySelectorAll('.arrow__slider');
  // const arrowLeft = document.querySelectorAll('.arrow__left');
  // const arrowRight = document.querySelectorAll('.arrow__right');


  function hideReviewContent() {
    reviews.forEach(review => {
      review.classList.add('hide');
    });

    slideButtons.forEach((slideButton) => {
      slideButton.classList.remove('slider__toggle--active');
      slideButton.classList.add('slider__toggle');
    })
  }

  function showTabContent(i = 0) {
    reviews[i].classList.add('show');
    reviews[i].classList.remove('hide');
    slideButtons[i].classList.remove('slider__toggle');
    slideButtons[i].classList.add('slider__toggle--active');
  };

  slideButtonsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && slideButtons) {
      slideButtons.forEach((slideButton, i) => {
        if (target == slideButton) {
          hideReviewContent()
          showTabContent(i);
        }
      });
    }
  });

  // arrowLeft.addEventListener('click', () => {

  // });

  // arrowRight.addEventListener('click', () => {

  // });


})();