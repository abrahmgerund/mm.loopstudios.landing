const hamburgerBtn = document.querySelector('.nav__mobile-nav-hamburger-btn');
const hamburgerClose = document.querySelector('.nav__mobile-nav-hamburger-close');
const hamburgerSlide = document.querySelector('.nav__mobile-nav-slide');
const darkOverlay = document.querySelector('.dark-overlay');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('a');


const toggleSlide = function () {
    hamburgerBtn.classList.toggle('nav__mobile-nav-hamburger-btn--active');
    hamburgerClose.classList.toggle('nav__mobile-nav-hamburger-close--active');
    hamburgerSlide.classList.toggle('nav__mobile-nav-slide--active');
    darkOverlay.classList.toggle('dark-overlay--active');

    links.forEach((link) => link.addEventListener('click', toggleSlide));
}

const toggleNavFilter = function () {
    if (window.scrollY > 0) {
        nav.classList.add('nav--scroll-active');
    } else {
        nav.classList.remove('nav--scroll-active');
    }

}





hamburgerBtn.addEventListener('click', toggleSlide);
hamburgerClose.addEventListener('click', toggleSlide);
window.addEventListener('scroll', toggleNavFilter);


console.log(links);