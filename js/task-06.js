const refs = {
    input: document.getElementById('validation-input'),
}

const validLength = 6;

refs.input.addEventListener('blur', onCheckValidInput);

function onCheckValidInput() {
    if (refs.input.value.length === 6) {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    } else {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
    }
}