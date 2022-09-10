const html = document.documentElement;
const modulesLinkWrapper = document.querySelector('#modulesLinkWrapper');

export function getBrowserLanguage() {
    return navigator.language || navigator.userLanguage;
}

export function getSystemTheme() {
    return window.getComputedStyle(html).content.includes('dark') ? 'dark' : 'light';
}

export function animate() {
    let animatecss = `https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`;

    new WOW().init();

    modulesLinkWrapper.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="${animatecss}">`);
    document.querySelectorAll('.wow').forEach(el => {
        if (!el.getAttribute('data-wow-offset')) {
            el.classList.add('animate__animated');
            el.setAttribute('data-wow-offset', el.scrollHeight);
        }
    })
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