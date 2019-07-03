//import ParticleSystem from '/particle-system.js';

var timeX, timeY, circle;

class Particle {

	constructor(_force, _lifetime) {
		this.x = random(0, width);
		this.y = 0;
		this.size = random(25, 150);
		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
		this.alive = false;
		this.force = _force;
		this.lifetime = _lifetime;
	}

	emit() {
		this.alive = true;
		//console.log("this whole thing makes me wanna die");
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.size, this.size);
	}
}

//SKETCH
function setup() {
	createCanvas(500, 500);
	timeX = 0;
	timeY = 10000;
	circle = new Particle(100, 100);
}

function draw() {
	clear();
	circle.emit();
	//ellipse(100, 100, 100, 100);

	var xn = noise(timeX) * width;
	var yn = noise(timeY) * height;

	rect(xn, yn, 80, 80);

	timeX += 0.01;
	timeY += 0.01;
}

//PUT THIS IN THE PARTICLE SYSTEM FILE
class ParticleSystem {


}