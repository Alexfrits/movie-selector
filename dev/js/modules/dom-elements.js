/* global Utils */
var Dom = (function (Utils) { // eslint-disable-line no-unused-vars
  //SEARCH FORM
  var searchForm  = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');

  // RESULT DISPLAY
  var resultsList = document.getElementById('results');

  // METHODS
  function create(name, options, isFragment) {
    var el;
    if (!isFragment) {
      el = document.createElement(name);
    } else {
      el = document.createDocumentFragment(name);
    }
    if (options) {
      if(options.props) {
        for (var p in options.props) {
          el[p] = options.props[p];
        }
      }
      if(options.content && options.content !== '') {
        el.innerHTML = options.content;
      }
    }
    return el;
  }

  function createHeader ( content ) {
    var headerNode = create('header', {}, true);
    var title = create('h2', {content: content.Title});
    headerNode.appendChild(title);
    return headerNode;
  }

  function createYear ( content ) {
    return create('p', {content: content});
  }
  function createGenre ( content ) {
    return create('p', {content: content});
  }

  function createActorsContainer(rawActorsList) {

    function createActors ( rawActorsList ) {
      if(rawActorsList) {
        return rawActorsList.split(',').map(function(actor) {
          var actorName = actor.trim();
          return create('li', {content: actorName});
        });
      }
    }

    var container = create( 'div' );
    var actors = createActors( rawActorsList );
    var childNodes = { title: create('h3', {content: 'Actors:'}) };

    // populating the actors list node
    if(actors && actors.length > 0) {
      var list = create('ul');
      actors.forEach(function(actorNode) {
        list.appendChild(actorNode);
      });
      childNodes.list = list;
    }

    // populating the parent node
    for (var itemName in childNodes) {
      container.appendChild(childNodes[itemName]);
    }

    return container;
  }

  function createBody (content) {
    var bodyNode = create('body', {}, true);
    var childNodes = [
      createYear( content.Year ),
      createGenre( content.Genre ),
      createActorsContainer(content.Actors),
      create('img', {props: {src: content.Poster, title: content.Title, alt: content.Title}}),
      create('p', {content: content.Plot})
    ];
    childNodes.forEach(function(node) {
      bodyNode.appendChild(node);
    });
    return bodyNode;
  }

  function clearNode (node) {
    // clearing the parent node
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function createElem (child) {
    if ( Array.isArray(child) ) {

    } else {
      var newElement = create(child.tag);
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
    // console.log(children);

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

  function setResponse (rootEl, resp) {
    clearNode(rootEl);
    var filteredResp = {};
    var docFrag = document.createDocumentFragment();

    var sections = {
      'header': ['Title'],
      'main'  : ['Director', 'Year', 'Genre']
    };

    // preparing the main elements
    Object.keys(sections).forEach(function(section){
      var node = create(section);
      docFrag.appendChild(node);
    });

    // filtering properties that contain data
    Object.keys(resp).forEach(function(key) {
      var property = resp[key];
      if(property && property !== 'N/A' && !filteredResp.hasOwnProperty(key)) {
        filteredResp[key] = property;
      }
    });

    var headerNode = createHeader(filteredResp);
    var bodyNode = createBody(filteredResp);

    // adding sections to the virtual element
    docFrag.children[0].appendChild(headerNode);
    docFrag.children[1].appendChild(bodyNode);

    // adding virtual element to the actual dom
    rootEl.appendChild(docFrag);
  }

  return {
    searchForm  : searchForm,
    searchInput : searchInput,
    resultsList : resultsList,
    // setData     : setData,
    setResponse : setResponse
  };
}(Utils));
