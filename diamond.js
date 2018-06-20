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

	if (lettre == 'D') {
		diamant[0] = generePremiereLigneDiamant(lettre);
		diamant[1] = genereDeuxiemeLigneDiamant(lettre);
	}

	return diamant;
}

function generePremiereLigneDiamant(lettre){
	var ligne = "";

	ligne = " ".repeat(convertitLettreEnChiffre(lettre)) + "A" + " ".repeat(convertitLettreEnChiffre(lettre));

	return ligne;
}

function genereDeuxiemeLigneDiamant(lettre){
	var ligne = "";

	ligne = " ".repeat(convertitLettreEnChiffre(lettre) - 1) + "B B" + " ".repeat(convertitLettreEnChiffre(lettre) - 1);

	return ligne;
}

function genereLigneDiamant(lettre, index_ligne){
	var ligne = "";

	ligne = " ".repeat(convertitLettreEnChiffre(lettre) - index_ligne) + "lettre de la ligne répétée le bon nombre de fois" + " ".repeat(convertitLettreEnChiffre(lettre) - index_ligne);

	return ligne;
}

function convertitLettreEnChiffre(lettre){
	var dictionnaireLettreChiffre = new Map();

	dictionnaireLettreChiffre.set("A", 0);
	dictionnaireLettreChiffre.set("B", 1);
	dictionnaireLettreChiffre.set("C", 2);
	dictionnaireLettreChiffre.set("D", 3);

	return dictionnaireLettreChiffre.get(lettre);
}


module.exports = {
	genereDiamant,
	genereLigneDiamant
}