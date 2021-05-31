const refs = {
    input: document.querySelector('input'),
    create: document.querySelector('[data-action="render"]'),
    delete: document.querySelector('[data-action="destroy"]'),
    boxesSpace: document.getElementById('boxes')
}

let numberOfBoxes = 0;

refs.input.addEventListener('input', onPassToVar);

refs.create.addEventListener('click', onCreateBoxes);
refs.delete.addEventListener('click', destroyBoxes);

function onCreateBoxes() {
    createBoxes(numberOfBoxes);
}

function onPassToVar() {
    numberOfBoxes = refs.input.value;
    console.log(numberOfBoxes)
}

function destroyBoxes() {
    refs.boxesSpace.innerHTML = "";
}

function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

function createBoxes(amount) {

    const allBoxes = [];

    for (let i = 0; i < amount; i ++){
        const boxEl = document.createElement('div');
        boxEl.style.width = `${30 + (i * 10)}px`;
        boxEl.style.height = `${30 + (i * 10)}px`;
        boxEl.style.backgroundColor = get_rand_color();
        boxEl.style.margin = '10px'
        allBoxes.push(boxEl);
    }

    refs.boxesSpace.append(...allBoxes);

}
