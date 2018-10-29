const ListView = require('./views/movie_list_view.js');
const Movies = require('./models/movies.js');
const PubSub = require('./helpers/pub_sub.js');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('section#movie-list');
  const listView = new ListView(container);
  listView.setUpEventListeners();

  const moviesData = new Movies();
  moviesData.getData();
});
