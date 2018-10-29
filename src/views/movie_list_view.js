const MovieView = require('./movie_view.js');
const PubSub = require('../helpers/pub_sub.js');

const ListView = function (container) {
  this.container = container;
}

ListView.prototype.setUpEventListeners = function () {
  PubSub.subscribe('Movies:movies-loaded', (event) => {
    const movies = event.detail;
    this.render(movies);
  });
}


ListView.prototype.render = function (movies) {
  this.movies.forEach(movie => {
    const movieView = new MovieView();
    const div = movieView.create(movie);
    this.container.appendChild(div);
  });
}

module.exports = ListView;
