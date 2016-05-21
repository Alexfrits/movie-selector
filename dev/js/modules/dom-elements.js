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
   * Creates a sub-element and appends it to the rootEl
   * populates a DOM element with the data received from the server
   * @param {Object | String} rootEl - either an existing DOM element or a newly created one
   *                                 - String must be a valid HTML tag name
   * @param {Object} children
   * @param {String} children.tagName  - a valid HTML tagName
   * @param {String} children.content  - a string
   */
  function setData (rootEl, children) {
    var rootNode;
    var newElement;
    console.log(children);

    if (typeof rootEl === 'string') {
      rootNode = document.createElement(rootEl);
    } else {
      rootNode = rootEl;
      clearNode(rootEl);

      if(children && Array.isArray(children) ) {
        children.forEach(function(elem) {
          newElement = createElem(elem);
          rootEl.appendChild(newElement);
        });
      } else if(typeof children === 'string') {
        newElement = createElem(children);
        rootEl.appendChild(newElement);
      }

    }
  }

  function clearNode (node) {
    // clearing the parent node
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  return {
    searchForm  : searchForm,
    searchInput : searchInput,
    resultsList : resultsList,
    setData     : setData
  };
}(Utils));
