let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#messageDisplay');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var scoreDisplay = document.querySelector('#scoreDisplay');
// let score = 0;

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', function() {
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		modeButtons[2].classList.remove('selected');
		this.classList.add('selected');

		if (this.textContent === 'EASY') {
			numSquares = 3;
			extraClassRemoval();
		} else if (this.textContent === 'HARD') {
			numSquares = 6;
			extraClassRemoval();
		} else if (this.textContent === 'CLOWN MODE') {
			numSquares = 30;
			for (var i = 0; i < squares.length; i++) {
				squares[i].classList.add('squareExtra');
			}
		}
		reset();
	});
}

function extraClassRemoval() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.remove('squareExtra');
	}
}

function reset() {
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match a picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = 'ΝΕΑ ΧΡΩΜΑΤΑ';
	messageDisplay.textContent = '';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function() {
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match a picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	resetButton.textContent = 'ΝΕΑ ΧΡΩΜΑΤΑ';
	messageDisplay.textContent = '';
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initila colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add eventlistener to squares
	squares[i].addEventListener('click', function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			messageDisplay.textContent = 'ΜΠΡΑΒΟ ΠΡΕΠΕΙ ΝΑ ΤΟ ΣΠΟΥΔΑΣΕΣ!';
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = 'ΠΑΙΞΕ ΞΑΝΑ!';
			// add1();
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'ΔΟΚΙΜΑΣΕ ΞΑΝΑ ΣΚΟΥΠΙΔΙ';
			// remove1();
		}
	});
}

function changeColors(color) {
	//loop through squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match the given color)
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];

	for (var i = 0; i < num; i++) {
		//add num random colors to array
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "red" from 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "red" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

0;

// function add1() {
// 	alert('ΔΕΝ ΕΧΩ ΞΑΝΑΔΕΙ ΚΑΛΥΤΕΡΟ ΚΛΟΟΥΝ, ΟΡΙΣΤΕ 100 ΠΟΝΤΟΙ');
// 	score = score + 100;
// 	scoreDisplay.textContent = score;
// 	console.log(score);
// }
// function remove1() {
// 	alert('mpravo hlithie');
// 	score = score - 100;
// 	scoreDisplay.textContent = score;
// 	console.log(score);
// }
