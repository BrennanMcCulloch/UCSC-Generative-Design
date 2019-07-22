class NPC {
	constructor(axiom, rules, dialogBox, xPos, yPos) {
		this.axiom = axiom;
		this.rules = rules;
		this.dialogBox = dialogBox;
		this.xPos = xPos;
		this.yPos = yPos;
		this.variable = 0;
	}

	displayNPC(playerX, playerY) {
		rect(this.xPos - 50, this.yPos - 50, 100, 100);

		if(playerX > this.xPos - 100 && playerX < this.xPos + 100 && playerY > this.yPos - 100 && playerY < this.yPos + 100) {
			this.displayText();
		}
	}

	displayText() {
		if(this.variable < 1) {
			this.dialogBox.displayDialog("Would you like to hear a very, VERY abstract and unfinished story?");
		}
		else {
			this.dialogBox.makeDialog(axiom);
		}
	}

	increaseVariable() {
		this.variable++;
	}

	resetVariable() {
		this.varible = 0;
	}
}