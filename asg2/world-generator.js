class WorldGenerator {
	constructor(x, y, z, _cubeSize, _seed) {
		this.width = x;
		this.length = y;
		this.totalDepth = z;
		this.cubeSize = _cubeSize;
		this.seed = _seed;
	}

	createWorld() {
		noiseSeed(this.seed);

		this.worldArray = [];
		for(var x = 0; x < this.width; x++) {
			var tempEmp = [];
			this.worldArray.push(tempEmp); //Fill the array with empty arrays
			for(var y = 0; y < this.length; y++) {
				var heightVal = Math.round(this.totalDepth * noise(x, y)); //Integer height for each space
				this.worldArray[x].push(heightVal); //Push it into the array, making it 2d
			}
		}
	}

	drawWorld() {
		var boundary = this.totalDepth / 6;
		translate(-width/2, height/2, -200); //resetting camera position

		for(var x = 0; x < this.width; x++){
			for(var y = 0; y < this.length; y++) {
				push();
				if(this.worldArray[x][y] <= Math.round(boundary * 1)) { //deep water
					fill(0, 0, 139);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 2)) { //shallow water
					fill(0, 191, 255);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 3)) { //sand
					fill(194, 178, 128);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 4)) { //grass
					fill(133, 178, 76);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 5)) { //mountain
					fill(160, 82, 45);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 6)) { //snowy mountain
					fill(255, 250, 250);
				}
				else {//math fucked up
					exit(0);
				}

				translate(x*this.cubeSize, 0, y*this.cubeSize);
				box(this.cubeSize);
				for(var z = 0; z < this.worldArray[x][y]; z++) {
					translate(0, -this.cubeSize, 0);
					box(this.cubeSize);
				}
				pop();
			}
		}
	}

}