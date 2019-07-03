var timeX, timeY;

function setup() {
	createCanvas(500, 500);
	timeX = 0;
	timeY = 10000;
}

function draw() {
	clear();

	var xn = noise(timeX) * width;
	var yn = noise(timeY) * height;

	ellipse(xn, yn, 80, 80);

	timeX += 0.01;
	timeY += 0.01;
}