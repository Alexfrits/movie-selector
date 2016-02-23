/* global MovieProxy, Dom, Utils */
(function (MovieProxy, Dom, Utils) {

  window.addEventListener('load', function (e) {
    // Dom.setData(Dom.resultsList, );
    MovieProxy.getMovieByImdbId().then(function(resp) {
      console.log(resp);
    });
  });

  Dom.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var title = Dom.searchInput.value.toString().trim();

    MovieProxy.getMovieByTitle(title)
      .then(function (resp) {
        Dom.setData(Dom.resultsList, {tag: 'li', content: resp.Title});
      });
  });
}(MovieProxy, Dom, Utils));
