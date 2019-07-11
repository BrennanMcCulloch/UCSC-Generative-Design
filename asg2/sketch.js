var world, cam, prevX, prevY, ture, deep, shallow, sand, grass, mountain, snow;

function preload() {
	deep = loadImage('deep.png');
	shallow = loadImage('shallow.jpg');
	sand = loadImage('sand.jpg');
	grass = loadImage('grass.jpg');
	mountain = loadImage('mountain.png');
	snow = loadImage('snow.png');
}

function setup() {
	createCanvas(1500, 800, WEBGL); //3D canvas. Enable this when ready.
	background(200);

    //width, length, depth, cubeSize, seed, TEXTURES
	world = new WorldGenerator(32, 32, 36, 16, 12345 * random(), deep, shallow, sand, grass, mountain, snow);
	world.createWorld();

	cam = createCamera();
}

function draw() {
	background(200);
	world.drawWorld();

	//Key controls
	if(keyIsDown(87)) { //W (move forward)
		cam.move(0, 0, -10);
	}
	if(keyIsDown(65)) { //A (move left)
		cam.move(-10, 0, 0);
	}
	if(keyIsDown(83)) { //S (move back)
		cam.move(0, 0, 10);
	}
	if(keyIsDown(68)) { //D (move right)
		cam.move(10, 0, 0);
	}
	if(keyIsDown(69)) { //E (move up)
		cam.move(0, -10, 0);
	}
	if(keyIsDown(81)) { //Q (move down)
		cam.move(0, 10, 0);
	}
}

//Mouse controls
function mouseDragged() {
	if(prevX && prevY) {
		cam.pan((mouseX - prevX) * 0.005);
		cam.tilt((mouseY - prevY) * 0.005);
	}
	prevX = mouseX;
	prevY = mouseY;
}
function mouseReleased() {
	prevX = 0;
	prevY = 0;
}