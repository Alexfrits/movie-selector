var Utils = (function () {  // eslint-disable-line no-unused-vars

  /**
   * A simple function that converts a format 'XXX min' to a format 'XhXX'
   * @param  {String} timeInMin - a time length in format 'XXX min'
   * @return {String}           - a time length in format 'XhXX'
   */
  var toHour = function (timeInMin) {
    var timeLength = parseInt(timeInMin.split(' ')[0]);
    var hours = (Math.floor(timeLength / 60));
    var minutes = ((timeLength % 60 < 10) ? '0' + (timeLength % 60) : (timeLength % 60));

    return hours + 'h' + minutes;
  };

  /**
   * a Shorthand to Object.prototype.toString
   * @param  {Object} data - any kind of js Object, function, array, number,…
   * @return {String}      - the stringified version
   */
  var toString = function (data) {
    return Object.prototype.toString(data);
  };

  /**
   * generating a random imdb id format ttXXXXXXX
   * @return {String} id - the random imdb id
   */
  var randId = function () {
    var id = 'tt';

    for (var i = 0; i < 7; i++) {
      id += Math.floor(Math.random() * 10);
    }
    return id;
  };

  return {
    toHour    : toHour,
    toString  : toString,
    randId    : randId
  };
}());
