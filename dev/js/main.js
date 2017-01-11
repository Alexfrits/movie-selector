/* global MovieProxy, Dom, Utils */
(function (MovieProxy, Dom, Utils) { // eslint-disable-line no-unused-vars

/*  INIT
================================================================== */
  window.addEventListener('DOMContentLoaded', function (e) {
    // Dom.setData(Dom.resultsList, [{tag: 'p', content: 'loading'}]);
    // MovieProxy.getConfig()
    //   .then(resp => {
    //     return MovieProxy.getRandomMovie();
    //   }).then(resp => {
    //     console.log(resp);
    //   })
  });

  Dom.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = Dom.searchInput.value.toString().trim();

    MovieProxy.getMovieByTitle(title).then(function(resp) {
    });
  });
}(MovieProxy, Dom, Utils));
