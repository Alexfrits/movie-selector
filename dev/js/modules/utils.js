var Utils = (function () {
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