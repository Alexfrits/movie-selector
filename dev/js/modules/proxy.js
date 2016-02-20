var MovieProxy = (function proxy () {

  var baseURL = 'http://www.omdbapi.com/?';
  var queryMethod = {
    title: 't='
  };

  var getMovieByTitle = function (title) {
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

  return {
    getMovieByTitle: getMovieByTitle
  };
}());
