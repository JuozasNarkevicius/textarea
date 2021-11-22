let minRows = 2;
let maxRows = 5;

window.onload = init;

function init() {
    const textarea = document.getElementById('textarea');
    textarea.setAttribute("rows", minRows);
    textarea.addEventListener("input", autoResize, false);
}

function autoResize() {
    if (this.clientHeight < this.scrollHeight && this.rows < maxRows) {
        console.log(this.rows, maxRows);
        this.rows++;
    }
    if (this.value.length > (minRows - 1) * this.cols + 2) {
        const rows = Math.ceil(this.value.length / (this.cols + 2));
        if (rows <= maxRows) {
            this.rows = rows;
        }
    }
}