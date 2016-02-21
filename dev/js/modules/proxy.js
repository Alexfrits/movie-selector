var MovieProxy = (function proxy () {

  var baseURL     = 'http://www.omdbapi.com/?';
  var queryMethod = {
    title: 't='
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

  return {
    getMovieByTitle: getMovieByTitle
  };
}());
