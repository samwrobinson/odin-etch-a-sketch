
let userInput = document.querySelector('#userInput');
let button = document.querySelector('#submit');
let gridSize = 0;
let container = document.querySelector('.container');
let clear = document.querySelector('#clear');

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
        userInput.value = '';
    }
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
            container.appendChild(div);        
        }
    }
    createDivs(gridSize);

    // Highlight cells when hovered over
    function darken(event) {
        event.target.style.backgroundColor = 'black';
    }

    let pixel = document.querySelectorAll('.pixel');

    pixel.forEach(pixel => {
        pixel.addEventListener('mouseover', darken);
    });
});

// Clear divs when button is clicked
clear.addEventListener('click', () => {
    for (let i=0; i<=gridSize*gridSize; i++) {
        container.removeChild(container.firstChild);
    }
});