//PUT IN PARTICLE.JS WHEN READY
class Particle {

	constructor(_force, _lifetime) {
		this.size = random(25, 150);
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
var circles;

function setup() {
	createCanvas(500, 500);
	circles = new ParticleSystem(100);
}

function draw() {
	clear();
	background(100);
	circles.run();
}

function keyPressed() {
		circles.emitOne(5, 100);
}