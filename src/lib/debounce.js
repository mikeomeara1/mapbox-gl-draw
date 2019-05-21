// @MKO 5/21/2019 - Debounce Function for CPU 
// Intensive Event Handlers
function debounce(cb, interval, immediate) {
    var timeout;
    
    return function() {
      var context = this, args = arguments;
      var later = function() {

        timeout = null;
        if (!immediate) cb.apply(context, args);
      };          
  
      var callNow = immediate && !timeout;

      clearTimeout(timeout);
      timeout = setTimeout(later, interval);
  
      if (callNow) cb.apply(context, args);
    };
  };

  
module.exports = debounce;