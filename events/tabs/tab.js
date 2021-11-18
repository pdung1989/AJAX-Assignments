'use strict';

function asTabs(node) {
  var nav = document.createElement('nav');
  var navList = document.createElement('ul');

  var tabs = document.querySelectorAll('div');
  var buttons = [];
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    var item = document.createElement('li');
    var button = document.createElement('a');

    item.style.display = 'inline-block';
    button.href = '#';
    buttons.push(button);
    //button.appendChild(document.createTextNode(tab.getAttribute("data-tabname")));
    button.textContent = tab.getAttribute('data-tabname');
    item.appendChild(button);
    navList.appendChild(item);
  }

  // default state: show the first tab
  buttons[0].setAttribute('data-selected', '');
  for (var i = 1; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
  }

  // add event listeners
  buttons.forEach(function (button, nth) {
    button.addEventListener('click', function (event) {
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        if (i == nth) {
          tab.style.display = 'inline-block';
          buttons[i].setAttribute('data-selected', '');
        } else {
          tab.style.display = 'none';
          buttons[i].removeAttribute('data-selected');
        }
      }
    });
  });

  nav.appendChild(navList);
  var wrapper = document.querySelector('tab-pannel');
  document.body.insertBefore(nav, wrapper);
}
asTabs(document.querySelector('tab-pannel'));
