var slidercon = document.querySelector('.slidercontainer');
var slider = document.getElementById('slider');
var output = document.getElementById('output');
var board = document.getElementById('sketchboard');
var clearBtn = document.getElementById('clearBtn');
var colorBtn = document.getElementById('colorWheel');

var stepValues = [16, 32, 64, 128, 256] // values for range slider
var stepDescription = ['Super Small', 'Small', 'Medium', 'Large', 'Super Large']

var color = colorBtn.value;


for (i = 0; i<1024; i++) {
    let div = document.createElement('div');
    div.className = 'cell';
    board.append(div);
}

function changeColor(e) {
    this.style.cssText = `background: ${color}`;
}

function reset() {
    cells.forEach(el => el.style.cssText = 'background: white');
}

cells = document.querySelectorAll('.cell');

cells.forEach(el => el.addEventListener('mouseover', changeColor));



slider.oninput = function() {

    board.className = `sketchboard${stepValues[this.value]}`;
    reset();
}

slider.oninput();

clearBtn.addEventListener('click', reset);

colorBtn.onchange = function () {
    color = this.value;
}

