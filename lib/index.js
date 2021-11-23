
var minRows = 2;
var maxRows = 6;
var textarea;

var init = function init () {
  textarea = document.getElementById('textarea');
  textarea.setAttribute('rows', minRows);
  textarea.addEventListener('input', autoResize, false);
};

var autoResize = function autoResize () {
  var content = textarea.value.split('\n');
  var count = 0;
  var additionalRows;
  content.forEach(function (e) {
    if (e.length === 0) {
      additionalRows = 1;
    } else {
      additionalRows = Math.ceil(e.length / (textarea.cols + 2));
    }

    count += additionalRows;
  });

  if (count < minRows) {
    count = minRows;
  }

  if (count > maxRows) {
    count = maxRows;
    textarea.style.overflow = 'auto';
  } else {
    textarea.style.overflow = 'hidden';
  }

  textarea.rows = count;
};

window.onload = init;
