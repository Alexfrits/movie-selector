var vDom = (function vDom() {
  function h (type, props, children) {
    return { type: type, props: props, children: children };
  }

  function createElement (node) {
    if(typeof node === 'string') {
      return document.createTextNode(node);
    }
    var $el = document.createElement(node.type);
    node.children.map(createElement).forEach($el.appendChild.bind($el));
    return $el;
  }

  function updateElement ($parent, newNode, oldNode, nodeIndex) {
    var index = nodeIndex || 0;
    // adding a child
    if(!oldNode) {
      $parent.appendChild(createElement(newNode));
      // removing a child
    } else if(!newNode) {
      $parent.removeChild($parent.childNodes[index]);
    // modifiyng a child
    } else if(changed(newNode, oldNode)) {
      $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
      // diff children
    } else if(newNode.type){
      var newLength = newNode.children.length;
      var oldLength = oldNode.children.length;
      for (var i = 0; i < newLength || i < oldLength; i++) {
        updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
      }
    }

  }

  function changed (node1, node2) {
    return  typeof node1 !== typeof node2 ||
            typeof node1 === 'string' && node1 !== node2 ||
            node1.type !== node2.type;
  }

  return {
    h,
    createElement,
    updateElement
  };
})();