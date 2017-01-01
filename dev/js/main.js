/* global MovieProxy, Dom, Utils */
(function (MovieProxy, Dom, Utils) { // eslint-disable-line no-unused-vars

/*  INIT
================================================================== */
  window.addEventListener('load', function (e) {
    // Dom.setData(Dom.resultsList, [{tag: 'p', content: 'loading'}]);

    MovieProxy.getRandomMovie(function(resp) {
      Dom.setResponse(Dom.resultsList, resp);
      // Dom.setData(Dom.resultsList, [
      //   {tag: 'h2', content: resp.Title},
      //   {tag: 'li', content: resp.Year},
      //   {tag: 'li', content: resp.Runtime},
      //   {tag: 'li', content: resp.Actors}
      // ]);
    });
  });

  Dom.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = Dom.searchInput.value.toString().trim();

    MovieProxy.getMovieByTitle(title).then(function(resp) {
    });
  });
}(MovieProxy, Dom, Utils));
