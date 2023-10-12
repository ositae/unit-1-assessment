// DOM Manipulation to get HTML elements
const result = document.querySelector('#result');
const input = document.querySelector('#input');
const container = document.querySelector('#container');

let numCount = 'numbers';
if (numCount === 'numbers'){
    document.addEventListener('click', numberCounter )
}
// DOM manipulation and eventListener
container.addEventListener('click', (event) => {
	if (event.target.id === 'resetButton') {
		increment.value = 1;
    }else if (event.target.id === 'numbers' && numCount === 'numbers') {
		document.addEventListener('click', numberCounter);
        result.textContent = '0';
		input.value = 1;
        numCount = 'numbers';
}});

// add and subtract functions using Logic
// Make negative numbers red
// use parseInt method to return the integer value
function numberCounter(event) {
    if (event.target.id === 'addition') {
        result.textContent =
            parseInt(result.textContent) + parseInt(input.value);
            return result.textContent;
    } else if (event.target.id === 'subtraction') {
        result.textContent =
            parseInt(result.textContent) - parseInt(input.value);
    }
    if (parseInt(result.textContent) < 0) {
        result.style.color = 'red';
    }
}