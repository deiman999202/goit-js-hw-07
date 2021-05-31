const refs = {
    input: document.getElementById('name-input'),
    output: document.getElementById('name-output')
}

refs.input.addEventListener('input', onNameInput);
refs.input.addEventListener('blur', basicValueInput);



function onNameInput() {
        refs.output.textContent = refs.input.value;
}

function basicValueInput() {
    if (refs.output.textContent == "") {
        refs.output.textContent = "незнакомец";
    }
}