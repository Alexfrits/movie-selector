/* global Utils API_KEY*/
var MovieProxy = (function proxy (Utils, API_KEY) { // eslint-disable-line no-unused-vars

  let config = {};
  var baseURL     = 'https://api.themoviedb.org/3';
  const queryMethods = {
    find: 'find',
    config: 'configuration'
  };

  const defaultQueryParams = {
    api_key: API_KEY.key()
  };
  // var queryMethod = {
  //   title: 't=',
  //   imdb: 'i='
  // };

  function createQueryString(queryObject) {
    return Object.keys(queryObject).reduce((acc, curr, index) => {
      const separator = index ? '&' : '';
      return acc.concat(`${separator}${curr}=${queryObject[curr]}`);
    }, '');
  }

  // /**
  //  * Getting the movie data from the server
  //  * @param  {String} title - the title of the movie
  //  * @return {Object}       - returns a json object
  //  */
  // function getMovieByTitle (title) {
  //   return fetch(baseURL + queryMethod.title + title).then(function(resp) {
  //     return resp.json();
  //   }).catch(function(err) {
  //     return err;
  //   });
  // }

function getConfig () {
  return fetch(`${baseURL}/${queryMethods.config}?${createQueryString(defaultQueryParams)}`)
    .then(resp => resp.json())
    .then(resp => config = resp);
}

  /**
   * Getting a movie by its IMDB ID
   * @param  {String} imdbId  - an IMDB ID format ttXXXXXXX
   * @return {Object} resp    - the movie object returned by the server
   */
  function getMovieByImdbId (imdbId) {
    const queryParams = createQueryString(Object.assign(
      {},
      defaultQueryParams,
      {
        external_source: 'imdb_id',
        language: 'fr-BE'
      }
    ));
    return fetch(`${baseURL}/${queryMethods.find}/${imdbId}?${queryParams}`).then(function(resp) {
      const r = resp.json();
      console.log(r);
      return r;
    }).catch(function(err) {
      return err;
    });
  }


// TODO: try a more performant implementation.
// see https://www.themoviedb.org/talk/57e2dd4d92514101c8001fb8
// 
  function getRandomMovie (queryTries = 1) {
    const randomId = Utils.randId();
    return getMovieByImdbId(randomId).then(function(resp) {
      console.log(queryTries, randomId);
      if(Object.keys(resp).some(result => {
        return resp[result].length > 0;
      })) {
        return resp;
      } else {
        // while the api doesn't find a movie with the generated ID
        return getRandomMovie(++queryTries);
      }
    });
  }

  return {
    // getMovieByTitle,
    getRandomMovie,
    getMovieByImdbId,
    getConfig
  };

}(Utils, API_KEY));
