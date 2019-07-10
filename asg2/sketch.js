var world, cam, prevX, prevY; 

function setup() {
	//createCanvas(500, 500); //2D canvas
	createCanvas(500, 500, WEBGL); //3D canvas. Enable this when ready.
	background(200);

	world = new WorldGenerator(32, 32, 32, 16, 12345); //width, length, depth, cubeSize, seed
	world.createWorld();

	cam = createCamera();
	//cam.camera(0, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, -5, 0, 1);
}

function draw() {
	background(200);
	world.drawWorld();

	//mouse controls
	if(prevX && prevY) {
		cam.pan((mouseX - prevX) * 0.005);
		cam.tilt((mouseY - prevY) * 0.005);
	}
	prevX = mouseX;
	prevY = mouseY;

	if(keyIsDown(87)) { //W
		cam.move(0, 0, -10);
	}
	if(keyIsDown(65)) { //A
		cam.move(-10, 0, 0);
	}
	if(keyIsDown(83)) { //S
		cam.move(0, 0, 10);
	}
	if(keyIsDown(68)) { //D
		cam.move(10, 0, 0);
	}
}