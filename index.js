let minRows = 2;
let maxRows = 6;

window.onload = init;

function init() {
    const textarea = document.getElementById('textarea');
    textarea.setAttribute("rows", minRows);
    textarea.addEventListener("input", autoResize, false);
}

function autoResize() {
    const content = this.value.split('\n');
    let count = 0;

    for (let i = 0; i < content.length; i++) {
        let additionalRows = Math.ceil(content[i].length / (this.cols + 2));
        if(additionalRows === 0) {
            additionalRows = 1;
        }
        count += additionalRows;
    }
    
    if (count < minRows) {
        count = minRows
    }
    if (count > maxRows) {
        count = maxRows;
    }

    this.rows = count;
}