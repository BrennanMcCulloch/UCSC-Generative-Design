//PUT IN PARTICLE.JS WHEN READY
class Particle {

	constructor(_force, _lifetime) {
		this.size = random(5, 25);
		this.x = random(0, width);
		this.y = this.size / 2;
		this.yTemp = this.y;
		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
		this.alive = false;
		this.force = _force;
		this.lifetime = _lifetime;
		this.reset = this.lifetime;
	}

	emit() {
		this.alive = true;
	}

	run() {
		if(this.alive) {
			this.yTemp += this.force;
			fill(this.r, this.g, this.b);
			ellipse(this.x, this.yTemp, this.size, this.size);
			this.lifetime -= 2;
		}
		if(this.lifetime <= 0) {
			this.alive = false;
		}
	}

	update(_force, _lifetime) {
		this.force = _force;
		this.lifetime += _lifetime;
	}
}

//PUT THIS IN PARTICLE-SYSTEM.JS WHEN READY
class ParticleSystem {

	constructor(_particles) {
		this.particleNum = _particles;
		this.position = 0;
		this.particles = [];
		for(var x = 0; x < _particles; x++){
			this.particles.push(new Particle(5, 100));
		}
	}

	run(){
		for(var x = 0; x < this.particleNum; x++){
			this.particles[x].run();
			if(this.particles[x].alive == false && this.particles[x].yTemp != this.particles[x].y) {
				this.particles[x].lifetime = this.particles[x].reset;
				this.particles[x].yTemp = this.particles[x].y;
			}
		}
	}

	emitOne(velocity, existence) {
		for(var x = 0; x < this.particleNum; x++) {
			if(this.particles[x].alive == false) {
				this.particles[x].update(velocity, existence);
				this.particles[x].emit();
				break;
			}
		}
	}

}

//SKETCH
var circles, zelda, frequency, pitch, speeds;

function preload() {
	soundFormats('ogg');
	zelda = loadSound("BOTWMusic.ogg");
}


function setup() {
	createCanvas(500, 500);
	circles = new ParticleSystem(1000);
	frequency = new p5.FFT();
	zelda.play();
}

function draw() {
	clear();
	background(100);
	circles.run();

	pitch = frequency.analyze(); //pitch is now a 1024-bin array of vals between 0-255
	speeds = [0, 0, 0, 0, 0, 0, 0, 0] //taking the highest value and putting it in its respective bin

	//A SERIES OF WHILE LOOPS BECAUSE IDK HOW TO DO THIS BETTER
	var x = 0;
	while(x <= 25) {
		if(pitch[x] > speeds[0]) {
			speeds[0] = pitch[x];
		}
		x++;
	}
	while(x >= 26 && x <= 50) {
		if(pitch[x] > speeds[1]) {
			speeds[1] = pitch[x];
		}
		x++;
	}
	while(x >= 51 && x <= 75) {
		if(pitch[x] > speeds[2]) {
			speeds[2] = pitch[x];
		}
		x++;
	}
	while(x >= 76 && x <= 100) {
		if(pitch[x] > speeds[3]) {
			speeds[3] = pitch[x];
		}
		x++;
	}
	while(x >= 101 && x <= 125) {
		if(pitch[x] > speeds[4]) {
			speeds[4] = pitch[x];
		}
		x++;
	}
	while(x >= 126 && x <= 150) {
		if(pitch[x] > speeds[5]) {
			speeds[5] = pitch[x];
		}
		x++;
	}
	while(x >= 151 && x <= 175) {
		if(pitch[x] > speeds[6]) {
			speeds[6] = pitch[x];
		}
		x++;
	}
	while(x >= 176 && x <= 200) {
		if(pitch[x] > speeds[7]) {
			speeds[7] = pitch[x];
		}
		x++;
	}

	//frequency has been divided up into 8 bins with the largest value placed in that bin of that range.
	//we will now work with speeds.
	for(var x = 0; x < 8; x++) {
		if(speeds[x] > 200%x + 55) {
			circles.emitOne((x+1)*5, 100);
		}
	}

	//TEMP TO SEE IF SPEEDS IS WORKING (lol i might keep it cuz it's pretty)
	for(var x = 0; x < 8; x++) {
		fill(100, 255, 255);
		rect(x*5, 0, 5, speeds[x]);
	}
}

function mousePressed() {
	if(zelda.isPlaying()) {
		zelda.pause();
	}
	else {
		zelda.play();
	}
}