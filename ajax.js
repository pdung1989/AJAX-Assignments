'use strict';
const fetchShow = async (url) => {
  // 'q' is name of input field in html file
  const response = await fetch(url);
  return await response.json();
};

const form = document.querySelector('#search-form');
const query = document.querySelector('#query');
const target = document.querySelector('#target');

// Submit form listener
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const url = form.action + '?q=' + query.value;
  const tvShows = await fetchShow(url);
  console.log(tvShows);

  target.innerHTML = '';

  // Display all the movies on the web page
  tvShows.map((movie) => {
    target.innerHTML += `<article>
        <header>
          <h2>${movie.show.name}</h2>
          <a href='${
            movie.show.officialSite
              ? movie.show.officialSite
              : 'http://placekitten.com/g/200/300'
          }'>Link to the official page</a>
        </header>
        <img src='${
          movie.show.image
            ? movie.show.image.medium
            : 'http://placekitten.com/g/200/300'
        }' alt='${movie.show.name}'/>
        <p>${movie.show.summary}</p>
        <p>Genres:
          ${movie.show.genres}
        <p>
      </article>`;
  });
});
