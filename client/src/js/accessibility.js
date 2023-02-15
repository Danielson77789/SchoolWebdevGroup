function colorTheme() {

}

function changeFontSize() {
    const elem = document.getElementById('font-range');
    const body = document.getElementById('intro-block-text');
    body.style.fontSize = `${elem.value}px`;
}