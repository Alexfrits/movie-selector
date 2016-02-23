var MovieProxy = (function proxy () {

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

  function getMovieByImdbId () {
    // generating a random imdb id format ttXXXXXXX
    var randId = function () {
      var id = 'tt';

      for (var i = 0; i < 7; i++) {
        id += Math.floor(Math.random() * 10);
      }
      return id;
    };

    return fetch(baseURL + queryMethod.imdb + randId())
      .then(function(resp) {
        return resp.json();
      })
      .then(function(json) {
        console.log(randId());
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
