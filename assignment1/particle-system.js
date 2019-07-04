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

