function rules(base, results){
	this.base = base; //string
	this.results = results; //array of strings
}

class GenerativeGrammar{
	constructor(prodRules) {
		this.prodRules = prodRules; //array of rules
	}

	iterate(string) {
		var stringArray = string.split("");
		var newString = "";
		for(var stringPos = 0; stringPos < stringArray.length; stringPos++) {
			var arrayPos = 0;
			//find the position of the right rule;
			while(arrayPos < this.prodRules.length) {
				if(stringArray[stringPos] == this.prodRules[arrayPos].base) {
					break;
				}
				arrayPos++;
			}

			newString += this.prodRules[arrayPos].results[Math.round((random() * (this.prodRules[arrayPos].results.length - 1)))];
		}

		return newString;
	}

}