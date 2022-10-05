
// Debounce
function debounce (func, delay) {
  let timeout;
  return function() {

    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  }
}

export { debounce };


