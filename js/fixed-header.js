'use strict'

const header = document.querySelector('.header-first');
const btnUp = document.querySelector('.up-btn');
const firstBlock = document.querySelector('.section-1');
const firstBlockHeight = firstBlock.offsetHeight;

let scrollStart = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= firstBlockHeight) {
        header.classList.add('header--fixed');
        btnUp.classList.add('up-btn--fixed');
    } else {
        header.classList.remove('header--fixed');
        btnUp.classList.remove('up-btn--fixed');
    }
    scrollStart = scrollTop;
}