export class Particle {

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