import tippy from 'tippy.js';
import Swiper, { Navigation, Pagination } from 'swiper';

const html = document.documentElement;
const modulesLinkWrapper = document.querySelector('#modulesLinkWrapper');

export function getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
}

export function getSystemTheme() {
    return window.getComputedStyle(html).content.includes('dark') ? 'dark' : 'light';
}

export function animate() {
    new WOW().init();

    modulesLinkWrapper.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">`);

    document.querySelectorAll('[class*="animate__"]').forEach(el => {
        el.classList.add('wow');
        el.classList.add('animate__animated');

        if (!el.getAttribute('data-wow-offset')) {
            el.setAttribute('data-wow-offset', el.scrollHeight);
        }
    })
}

export function tippyInit(selector, config = {}) {
    modulesLinkWrapper.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://unpkg.com/tippy.js@6.3.7/animations/${config.animation}.css">`);

    tippy(selector, config);
}

export function swiperInit(selector, config = {}) {
    modulesLinkWrapper.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">`);

    config.modules = [Navigation, Pagination];

    const swiper = new Swiper(selector, config);
}

(function () {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        document.documentElement.classList.add(support === true ? 'webp' : 'no-webp');
    });
}());