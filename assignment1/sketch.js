//module.exports = require('./particle-system.js')
//import {ParticleSystem} from '/particle-system.js';
var timeX, timeY;

function setup() {
	createCanvas(500, 500);
	timeX = 0;
	timeY = 10000;
	var circle = new Particle(100, 100);
}

function draw() {
	clear();
//	circle.emit();

	var xn = noise(timeX) * width;
	var yn = noise(timeY) * height;

	rect(xn, yn, 80, 80);

	timeX += 0.01;
	timeY += 0.01;
}