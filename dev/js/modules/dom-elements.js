/* global Utils */
var Dom = (function (Utils) { // eslint-disable-line no-unused-vars
  //SEARCH FORM
  var searchForm  = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');

  // RESULT DISPLAY
  var resultsList = document.getElementById('results');

  // METHODS
  /**
   * Creates a sub-element and appends it to the parentElementpopulates a DOM element with the data received from the server
   * @param {Object} parentElement - either an existing DOM element or a newly created one
   * @param {Object} data          -
   * @param {string} data.tagName  - a valid HTML tagName
   * @param {string} data.content  - a valid HTML tagName
   */
  function setData (parentElement, data) {
    var newElement = document.createElement(data.tag);
    newElement.innerHTML = data.content;

    parentElement.appendChild(newElement);
  }

  return {
    searchForm  : searchForm,
    searchInput : searchInput,
    resultsList : resultsList,
    setData     : setData
  };
}(Utils));
