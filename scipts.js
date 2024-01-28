
let userInput = document.querySelector('#userInput');
let button = document.querySelector('#submit');
let gridSize = 0;
let container = document.querySelector('.container');
let clear = document.querySelector('#clear');
let pixel = document.querySelectorAll('.pixel');
let myCheckbox = document.querySelector('#myCheckbox');

// Create specified number of divs
function createDivs(gridSize) {
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    let divWidth = containerWidth / gridSize;
    let divHeight = containerHeight / gridSize;
    for (let i=0; i<gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');
        div.style.width = divWidth + 'px';
        div.style.height = divHeight + 'px';
        div.addEventListener('mouseover', getPixelEvent());
        container.appendChild(div);        
    }
};

// Highlight cells when hovered over
function darken(event) {
    event.target.style.backgroundColor = 'black';
};

function randomColor(event) {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    event.target.style.backgroundColor = color;
};

// Determine if checkbox is checked
function getPixelEvent() {
    return myCheckbox.checked ? randomColor : darken;
};

// Collect grid size from user
button.addEventListener('click', (e) => {
    gridSize = parseInt(userInput.value);
    if (!Number.isInteger(gridSize)){
        alert('Please choose a number between 1 - 100.')
        userInput.value = '';
    } else if (gridSize < 1 || gridSize > 100) {
        alert('Please choose a number between 1 and 100.');
        userInput.value = '';
    } else {
        createDivs(gridSize);
        userInput.value = '';
    }
});

myCheckbox.addEventListener('change', function() {
    document.querySelectorAll('.pixel').forEach(pixel => {
        pixel.removeEventListener('mouseover', darken);
        pixel.addEventListener('mouseover', randomColor);
        pixel.addEventListener('mouseover', getPixelEvent());
    });
});    


// Clear divs when button is clicked
clear.addEventListener('click', () => {
    for (let i=0; i<=gridSize*gridSize; i++) {
        container.removeChild(container.firstChild);
    }
});