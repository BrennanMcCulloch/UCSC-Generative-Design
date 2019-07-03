export class Particle {

	constructor(force, lifetime) {
		this.x = random(0, width);
		this.y = 0;
		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
		this.alive = false;
		this.force = force;
		this.lifetime = lifetime;
	}

	emit() {
		this.alive = true;
		ellipse(x, y);
	}
}