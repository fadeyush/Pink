// require('es6-promise').polyfill();

import './scss/style.scss';

import showNav from './js/nav';
import showReview from './js/review-slider';

window.addEventListener('DOMContentLoaded', () => {
    showNav();
    showReview();
});
