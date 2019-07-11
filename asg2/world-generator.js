class WorldGenerator {
	constructor(x, y, z, _cubeSize, _seed, _deep, _shallow, _sand, _grass, _mountain, _snow) {
		this.width = x;
		this.length = y;
		this.totalDepth = z;
		this.cubeSize = _cubeSize;
		this.seed = _seed;
		this.deep = _deep;
		this.shallow = shallow;
		this.sand = _sand;
		this.grass = _grass;
		this.mountain = _mountain;
		this.snow = _snow;
	}

	createWorld() {
		noiseSeed(this.seed);

		this.worldArray = [];
		for(var x = 0; x < this.width; x++) {
			var tempEmp = [];
			this.worldArray.push(tempEmp); //Fill the array with empty arrays
			for(var y = 0; y < this.length; y++) {
				var heightVal = Math.round(this.totalDepth * noise(0.08 * x, 0.08 * y));
				this.worldArray[x].push(heightVal); //Push it into the array, making it 2d
			}
		}
	}

	drawWorld() {
		//NOTE: ALL OF THESE TEXTURES WERE STOLEN OFF GOOGLE. I did not make these. I made the code.
		var boundary = this.totalDepth / 6;
		translate(-width/2, height/2, -200); //resetting camera position

		for(var x = 0; x < this.width; x++){
			for(var y = 0; y < this.length; y++) {
				push();
				if(this.worldArray[x][y] <= Math.round(boundary * 1)) { //deep water
					texture(this.deep);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 2)) { //shallow water
					texture(this.shallow);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 3)) { //sand
					texture(this.sand);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 4)) { //grass
					texture(this.grass);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 5)) { //mountain
					texture(this.mountain);
				}
				else if(this.worldArray[x][y] <= Math.round(boundary * 6)) { //snowy mountain
					texture(this.snow);
				}
				else {//math messed up
					exit(0);
				}

				translate(x*this.cubeSize, 0, y*this.cubeSize);
				for(var z = 0; z <= this.worldArray[x][y]; z++) {
					translate(0, -this.cubeSize, 0);
					//If it's the highest block there
					if(z == this.worldArray[x][y]){
						box(this.cubeSize);
					}

					//If it's higher than any other block immediately nearby (except edges)
					if(x > 0 && x < this.width - 1 && y > 0 && y < this.length - 1) {
						if(z > this.worldArray[x-1][y] || z > this.worldArray[x][y-1] || z > this.worldArray[x+1][y] || z > this.worldArray[x][y+1]) {
							box(this.cubeSize);
						}
					}
				}
				pop();
			}
		}
	}

}