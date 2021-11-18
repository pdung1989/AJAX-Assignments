'use strict';

// create an array of dot
const elements = [];

for (let i = 0; i < 15; i++) {
  let dot = document.createElement('IMG');
  dot.setAttribute("src", "https://img.icons8.com/cute-clipart/50/000000/cat.png")
  dot.className = 'trail';
  document.body.appendChild(dot);
  elements.push(dot);
}

//display trails
var currentDot = 0;
function displayTrail(event) {
  var dot = elements[currentDot];
  dot.style.left = event.pageX - 4 + 'px';
  dot.style.top = event.pageY - 4 + 'px';
  if (currentDot == 14) {
    currentDot = 0;
  } else currentDot++;
}

window.addEventListener('mousemove', displayTrail);
