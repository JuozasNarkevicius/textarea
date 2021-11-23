let minRows = 2;
let maxRows = 6;

window.onload = init;

function init() {
    const textarea = document.getElementById('textarea');
    textarea.setAttribute("rows", minRows);
    textarea.addEventListener("input", autoResize, false);
}

function autoResize() {
    if (this.clientHeight < this.scrollHeight && this.rows < maxRows) {
        this.rows++;
    }
    else if (this.value.length >= minRows * (this.cols + 2)) {
        const rows = Math.ceil(this.value.length / (this.cols + 2));
        console.log(this.value.length, this.cols + 2);
        if (rows <= maxRows) {
            this.rows = rows;
        }
    }
}