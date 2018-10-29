const RequestHelper = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Movies = function () {

}

Movies.prototype.getData = function () {
  const req = new RequestHelper('http://omdbapi.com/?i=tt3896198&h=600&apikey=9f49f882');
  req.get()
    .then(data => {
      console.log(data);
      PubSub.publish('Movies:movies-loaded', data);
    });
}

module.exports = Movies;
