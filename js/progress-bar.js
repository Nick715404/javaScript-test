'use strict'

const progressBar = document.querySelector('.progressbar');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(windowHeight);

window.addEventListener('scroll', () => {
  const windowScroll = window.pageYOffset;
  const progressBarWidth = (windowScroll / windowHeight).toFixed(2);

  progressBar.setAttribute('style', `transform: scaleX(${progressBarWidth});`);
});