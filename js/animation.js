'use strict'

const screenHeight = document.documentElement.scrollHeight;
const listItems = document.querySelectorAll('.list__item');
const firstBox = document.querySelector('.box-1');
const secondBox = document.querySelector('.box-2');
const thirdBox = document.querySelector('.box-3');

function scrolling() {
  for(let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    if (isPartiallyVisible(listItem)) {
      listItem.classList.add('list__item--active');
    }else {
      listItem.classList.remove('list__item--active');
    }
  }

  if (isFullyVisible(firstBox)) {
    firstBox.classList.add('box-1--active');
  }

  if (isFullyVisible(secondBox)) {
    secondBox.classList.add('box-2--active');
  }

  if (isFullyVisible(secondBox)) {
    thirdBox.classList.add('box-3--active');
  }
}

function isPartiallyVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return (top + height >= 0) && (height + screenHeight > bottom);
}

function isFullyVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;

  return (top >= 0) && (bottom <= screenHeight);
}

window.addEventListener('scroll', scrolling);

// console.log(listItem);