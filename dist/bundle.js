(()=>{var e={916:e=>{e.exports=function(){const e=document.querySelectorAll(".user-photo__inner");document.querySelectorAll(".user-photo__like").forEach(((t,s)=>{const n=t.querySelector(".like-counter");let o=+n.textContent;const r=(e,t)=>t.innerText=e;t.addEventListener("click",(()=>{e[s].classList.contains("like")?function(t){r(--o,n),e[t].classList.remove("like")}(s):function(t){r(++o,n),e[t].classList.add("like")}(s)}))}))}},43:e=>{e.exports=function(){const e=document.querySelector(".page-header__toggle"),t=document.querySelector(".main-nav");e.addEventListener("click",(function(){t.classList.contains("main-nav--closed")?(t.classList.remove("main-nav--closed"),t.classList.add("main-nav--opened")):(t.classList.add("main-nav--closed"),t.classList.remove("main-nav--opened"))}))}},508:e=>{e.exports=function(){const e=document.querySelectorAll(".review__list"),t=document.querySelector(".slider__list"),s=document.querySelectorAll("button[data-content]"),n=document.querySelector(".arrow__left"),o=document.querySelector(".arrow__right");let r=0;function c(t){t>e.length-1&&(r=0),t<0&&(r=e.length-1),e.forEach((e=>e.classList.add("hide"))),e[r].classList.remove("hide"),e[r].classList.add("show")}function i(e){c(r+=e)}t.addEventListener("click",(t=>{const n=t.target;n&&s&&s.forEach(((t,o)=>{n==t&&(e.forEach((e=>{e.classList.add("hide")})),s.forEach((e=>{e.classList.remove("slider__toggle--active"),e.classList.add("slider__toggle")})),function(t=0){e[t].classList.add("show"),e[t].classList.remove("hide"),s[t].classList.remove("slider__toggle"),s[t].classList.add("slider__toggle--active")}(o))}))})),c(r),n.addEventListener("click",(()=>{i(-1)})),o.addEventListener("click",(()=>{i(1)}))}}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(43),t=s.n(e),n=s(508),o=s.n(n),r=s(916),c=s.n(r);window.addEventListener("DOMContentLoaded",(()=>{t()(),c()(),o()()}))})()})();