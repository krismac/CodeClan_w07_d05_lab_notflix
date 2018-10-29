const MovieView = function () {

}

MovieView.prototype.create = function (movie) {
  const div = document.createElement('div');
  div.classList.add('movie-info');

  const title = document.createElement('h2');
  name.textContent = movie.title;
  div.appendChild(title);

  const year = document.createElement('p');
  capital.textContent = movie.year;
  div.appendChild(year);

  const rated = document.createElement('p');
  capital.textContent = movie.rated;
  div.appendChild(rated);

  const director = document.createElement('p');
  capital.textContent = movie.director;
  div.appendChild(director);

  const poster = document.createElement('img');
  capital.textContent = movie.poster;
  div.appendChild(poster);

  return div;
}

module.exports = MovieView;
