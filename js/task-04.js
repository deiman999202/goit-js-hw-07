const refs = {
    value: document.getElementById('value'),
    increment: document.querySelector('[data-action="increment"]'),
    decrement: document.querySelector('[data-action="decrement"]'),
}

refs.increment.addEventListener('click', onClickIncrement);
refs.decrement.addEventListener('click', onClickDecrement);

let i = refs.value.innerHTML;

function onClickIncrement() {
    i++;
    value.innerHTML = i;
}

function onClickDecrement() {
    i--;
    value.innerHTML = i;
}