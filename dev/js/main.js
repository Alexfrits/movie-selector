/* global MovieProxy, Dom, Utils */
(function (MovieProxy, Dom, Utils) {
  Dom.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var title = Dom.searchInput.value.toString().trim();

    MovieProxy.getMovieByTitle(title)
      .then(function (resp) {
        // dom.setData(domElem, data);
      });
  });
}(MovieProxy, Dom, Utils));