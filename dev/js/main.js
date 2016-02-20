/* global proxy, dom */
(function (proxy, dom) {


  dom.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var title = dom.searchInput.value.toString().trim();

    proxy.getMovieByTitle(title)
      .then(function (resp) {
        // dom.setData(domElem, data);
      });
  });
}(proxy, dom));