'use strict';

const balloon = document.querySelector('p');
let bSize;

// set ballon size
const setBalloonSize = (newSize) => {
  bSize = newSize;
  balloon.style.fontSize = bSize + 'px';
};

setBalloonSize(30);

// when press arrow down or up
const pressArrow = (event) => {
  if (event.key === 'ArrowUp') {
    if (bSize < 100) {
      setBalloonSize(bSize * 1.1);
      event.preventDefault();
    } else {
      balloon.textContent = '💥';
      document.removeEventListener('keydown', pressArrow);
    }
  } else if (event.key === 'ArrowDown') {
    setBalloonSize(bSize * 0.9);
    event.preventDefault();
  }
};

// add event handler
document.addEventListener('keydown', pressArrow);
