var prodRules, axiom, box, playerX, playerY, npc;
function setup() {
	createCanvas(500, 500);
	background(200);

	//modify these results later
	var aResults = ["BC", "CD", "D"];
	var bResults = ["AC", "CA", "DD"];
	var cResults = ["BA", "DC", "DB"];
	var dResults = ["AA", "C", "BD"];
	var aA = new rules("A", aResults);
	var bB = new rules("B", bResults);
	var cC = new rules("C", cResults);
	var dD = new rules("D", dResults);
	var array = [aA, bB, cC, dD];
	prodRules = new GenerativeGrammar(array);
	axiom = "A";
	box = new DialogBox(350);

	npc = new NPC(axiom, prodRules, box, width/2, height/2);

	playerX = 50;
	playerY = 200;
}

function draw() {
	background(200);
	npc.displayNPC(playerX, playerY);
	circle(playerX, playerY, 50);

	if(keyIsDown(87)) { //W (move forward)
		playerY-=2;
	}
	if(keyIsDown(65)) { //A (move left)
		playerX-=2;
	}
	if(keyIsDown(83)) { //S (move back)
		playerY+=2;
	}
	if(keyIsDown(68)) { //D (move right)
		playerX+=2;
	}
}

function keyPressed() {
	if (keyCode == 89) { //Y
		npc.increaseVariable();
		axiom = prodRules.iterate(axiom);
	}
	if (keyCode == 78) { //N
		axiom = "A";
		npc.resetVariable();
	}
}