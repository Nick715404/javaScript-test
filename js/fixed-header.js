'use strict'

const header = document.querySelector('.header');
const firstBlock = document.querySelector('.section-1');
const firstBlockHeight = firstBlock.offsetHeight;

let scrollStart = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler() {
    const scrollTop = window.pageYOffset;

    if (scrollTop >= firstBlockHeight) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
    scrollStart = scrollTop;
}