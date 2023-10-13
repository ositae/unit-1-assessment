// DOM Manipulation to get HTML elements
const result = document.querySelector('#result');
const input = document.querySelector('#input');
const container = document.querySelector('#container');

let numCount = 'numbers';
if (numCount === 'numbers'){
    document.addEventListener('click', numberCount)
}
// DOM manipulation and eventListener
container.addEventListener('click', (event) => {
	if (event.target.id === 'resetButton') {
		input.value = 1;
    }else if (event.target.id === 'numbers' && numCount === 'numbers') {
		document.addEventListener('click', numberCounter);
        return result.textContent;
        // numCount = 'numbers';
}});

// add and subtract functions using Logic
// Make negative numbers red
// use parseInt method to return the integer value
function numberCount(event) {
    if (event.target.id === 'addition') {
        result.textContent +=
            parseInt(result.textContent + input.value)
            return result.textContent;
    } else if (event.target.id === 'subtraction') {
        result.textContent -=
            parseInt(result.textContent - input.value);
            return result.textContent
    }
    if (parseInt(result.textContent) < 0) {
        result.style.color = 'red';
    }
}