var MovieProxy = (function proxy () { // eslint-disable-line no-unused-vars

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
  }



  /**
   * Getting a movie by its IMDB ID
   * @param  {String} imdbId  - an IMDB ID format ttXXXXXXX
   * @return {Object} resp    - the movie object returned by the server
   */
  function getMovieByImdbId (imdbId) {

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
  }

  return {
    getMovieByTitle : getMovieByTitle,
    getMovieByImdbId: getMovieByImdbId
  };
}());
