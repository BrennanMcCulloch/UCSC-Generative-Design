class DialogBox {
	constructor(posY) {
		this.posY = posY;
	}

	makeDialog(stringWow) {
		textSize(15);
		var stringYes = stringWow.split("");
		var string = "";

		//Make the new string to display!
		for(var x = 0; x < stringYes.length; x++) {
			string += stringYes[x] + " ";
		}
		
		rect(10, this.posY, width-20, height/4);
		text(string, 10, this.posY, width-20, height/4);
	}

	displayDialog(string) {
		textSize(15);
		rect(10, this.posY, width-20, height/4);
		text(string, 10, this.posY, width-20, height/4);
	}
}