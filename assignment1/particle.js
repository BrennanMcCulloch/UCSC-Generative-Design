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
