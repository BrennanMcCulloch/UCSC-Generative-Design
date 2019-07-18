var prodRules, axiom, box;
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
}

function draw() {
	background(200);
	box.makeDialog(axiom);
}

function mousePressed() {
	console.log(axiom);
	var changed = prodRules.iterate(axiom);
	console.log(changed);
	axiom = changed;
}