// require('es6-promise').polyfill();

import './scss/style.scss';

import showNav from './js/nav';
import showReview from './js/review-slider';
import counterOfLikes from './js/like-counter';
import sentForm from './js/form';

window.addEventListener('DOMContentLoaded', () => {
    showNav();
    sentForm();
    counterOfLikes();
    showReview();
});

