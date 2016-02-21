var Dom = (function () {
  //SEARCH FORM
  var searchForm  = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');

  // RESULT DISPLAY
  var resultsList = document.getElementById('results');

  // METHODS
  /**
   * populates a DOM element with the data received from the server
   * @param {Object} domElement - either an existing DOM element or a newly created one
   * @param {String} data       - the data received from the server
   */
  function setData (domElement, data) {
    console.log(document.createELement);
  }

  return {
    searchForm  : searchForm,
    searchInput : searchInput,
    setData     : setData
  };
}());
