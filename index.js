const minRows = 2;
const maxRows = 6;
let textarea;

const init = () => {
  textarea = document.getElementById('textarea');
  textarea.setAttribute('rows', minRows);
  textarea.addEventListener('input', autoResize, false);
};

const autoResize = () => {
  const content = textarea.value.split('\n');
  let count = 0;
  let additionalRows;

  content.forEach(e => {
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
