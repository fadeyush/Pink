function showReview() {
    const main = document.querySelector('main');
    if (main.classList.contains('page-main')) {
        const reviews = document.querySelectorAll('.review__list');
        const slideButtonsParent = document.querySelector('.slider__list');
        const slideButtons = document.querySelectorAll('button[data-content]');
        // const arrowSliderParent = document.querySelectorAll('.arrow__slider'); 
        const arrowLeft = document.querySelector('.arrow__left');
        const arrowRight = document.querySelector('.arrow__right');
    
        let slideIndex = 0;
    
        // Слайдер для mob & tablet версии
        function hideReviewContent() {
            reviews.forEach(review => {
                review.classList.add('hide');
            });
    
            slideButtons.forEach((slideButton) => {
                slideButton.classList.remove('slider__toggle--active');
                slideButton.classList.add('slider__toggle');
            })
        }
    
        function showReviewContent(i = 0) {
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
                        showReviewContent(i);
                    }
                });
            }
        });
    
        // Слайдер для ПК версии
        showNextSlide(slideIndex);
    
        function showNextSlide(n) {
            if (n > reviews.length - 1) {
                slideIndex = 0;
            }
    
            if (n < 0) {
                slideIndex = reviews.length - 1;
            }
    
            reviews.forEach(review => review.classList.add('hide'));
            reviews[slideIndex].classList.remove('hide');
            reviews[slideIndex].classList.add('show');
        }
    
        function plusSlide(n) {
            showNextSlide(slideIndex += n);
        }
    
        arrowLeft.addEventListener('click', () => {
            plusSlide(-1);
        });
    
    
        arrowRight.addEventListener('click', () => {
            plusSlide(1);
        });
    }
    
}

module.exports = showReview;

// export default showReview;