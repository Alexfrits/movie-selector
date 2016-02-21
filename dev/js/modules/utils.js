var Utils = (function () {

  /**
   * A simple function that converts a format 'XXX min' to a format 'XhXX'
   * @param  {String} timeInMin - a time length in format 'XXX min'
   * @return {String}           - a time length in format 'XhXX'
   */

  function toHour(timeInMin) {
    var timeLength = parseInt(timeInMin.split(' ')[0]);
    var hours = (Math.floor(timeLength / 60));
    var minutes = ((timeLength % 60 < 10) ? '0' + (timeLength % 60) : (timeLength % 60));

    return hours + 'h' + minutes;
  }

  return {
    toHour: toHour
  };
}());
