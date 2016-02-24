/* global Utils */
var MovieProxy = (function proxy (Utils) { // eslint-disable-line no-unused-vars

  var self = {};
  var baseURL     = 'http://www.omdbapi.com/?';
  var queryMethod = {
    title: 't=',
    imdb: 'i='
  };

  /**
   * Getting the movie data from the server
   * @param  {String} title - the title of the movie
   * @return {Object}       - returns a json object
   */
  self.getMovieByTitle = function (title) {
    return fetch(baseURL + queryMethod.title + title)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(json) {
        return json;
      })
      .catch(function(err) {
        return err;
      });
  };

  /**
   * Getting a movie by its IMDB ID
   * @param  {String} imdbId  - an IMDB ID format ttXXXXXXX
   * @return {Object} resp    - the movie object returned by the server
   */
  self.getMovieByImdbId = function (imdbId) {

    return fetch(baseURL + queryMethod.imdb + imdbId)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(json) {
        console.log(imdbId);
        return json;
      })
      .catch(function(err) {
        return err;
      });
  };

  self.getRandomMovie = function (callback) {
    self.getMovieByImdbId(Utils.randId()).then(function(resp) {
      if(resp.Response === 'False') {
        // while the api doesn't find a movie with the generated ID
        self.getRandomMovie();
      } else {
        if(callback) {
          callback(resp);
        }
      }
    });
  };

  return self;

}(Utils));
