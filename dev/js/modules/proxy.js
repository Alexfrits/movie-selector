/* global Utils */
var MovieProxy = (function proxy (Utils) { // eslint-disable-line no-unused-vars

  var queryTries  = 0;  
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
  function getMovieByTitle (title) {
    return fetch(baseURL + queryMethod.title + title).then(function(resp) {
      return resp.json();
    }).catch(function(err) {
      return err;
    });
  }

  /**
   * Getting a movie by its IMDB ID
   * @param  {String} imdbId  - an IMDB ID format ttXXXXXXX
   * @return {Object} resp    - the movie object returned by the server
   */
  function getMovieByImdbId (imdbId) {
    return fetch(baseURL + queryMethod.imdb + imdbId).then(function(resp) {
      return resp.json();
    }).catch(function(err) {
      return err;
    });
  }

  function getRandomMovie (callback) {
    return getMovieByImdbId(Utils.randId()).then(function(resp) {
      queryTries++;
      console.log(queryTries);
      if(resp.Response === 'False') {
        // while the api doesn't find a movie with the generated ID
        getRandomMovie(callback);
      } else {
        return callback(resp);
      }
    });
  }

  return {
    getMovieByTitle,
    getRandomMovie,
    getMovieByImdbId
  };

}(Utils));
