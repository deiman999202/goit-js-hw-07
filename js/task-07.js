const refs = {
    input: document.getElementById('font-size-control'),
    text: document.getElementById('text')
}

refs.input.addEventListener('change', onChangeFontSize);

function onChangeFontSize() {
    text.style.fontSize = `${refs.input.value * 5}px`;
}

