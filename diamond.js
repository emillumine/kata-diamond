function genereDiamant(lettre){
	var diamant = [];

	if (lettre == 'A') {
		diamant[0] = 'A'

	}

	if (lettre == 'B') {

		diamant[0] = " A ";
		diamant[1] = "B B";
		diamant[2] = " A ";

	}

	if (lettre == 'C') {

		diamant[0] = " ".repeat(2) + "A" + " ".repeat(2);
		diamant[1] = " ".repeat(1) + "B B" + " ".repeat(1);
		diamant[2] = "C C C";
		diamant[3] = " B B ";
		diamant[4] = "  A  ";

	}

	return diamant;
}

module.exports = genereDiamant;