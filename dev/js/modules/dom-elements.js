/* global Utils */
var Dom = (function (Utils) { // eslint-disable-line no-unused-vars
  //SEARCH FORM
  var searchForm  = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');

  // RESULT DISPLAY
  var resultsList = document.getElementById('results');

  // METHODS
  function createElem (child) {
    if ( Array.isArray(child) ) {

    } else {
      var newElement = document.createElement(child.tag);
      newElement.innerHTML = child.content;
    }
    return newElement;
  }
  /**
   * Creates a sub-element and appends it to the parentElement
   * populates a DOM element with the data received from the server
   * @param {Object} parentElement - either an existing DOM element or a newly created one
   * @param {Object} data
   * @param {String} data.tagName  - a valid HTML tagName
   * @param {String} data.content  - a string
   */
  function setData (parentElement, data) {
    var newElement;
    // clearing the parent node
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
    if(data && Array.isArray(data) ) {
      data.forEach(function(elem) {
        newElement = createElem(elem);
        parentElement.appendChild(newElement);
      });
    } else {
      newElement = createElem(data);
      parentElement.appendChild(newElement);
    }
  }

  return {
    searchForm  : searchForm,
    searchInput : searchInput,
    resultsList : resultsList,
    setData     : setData
  };
}(Utils));
