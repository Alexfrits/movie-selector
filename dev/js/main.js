/* global MovieProxy, Dom, Utils */
(function (MovieProxy, Dom, Utils) {
  Dom.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var title = Dom.searchInput.value.toString().trim();

    MovieProxy.getMovieByTitle(title)
      .then(function (resp) {
        Dom.setData();
        console.log(resp);
      });
  });
}(MovieProxy, Dom, Utils));
