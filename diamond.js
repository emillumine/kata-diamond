function genereDiamant(lettre){
	var diamant = [];

	for (var i = 0; i <= convertitLettreEnChiffre(lettre); i++) {
		diamant[i] = genereLigneDiamant(lettre, i);
	}

	for (var i = 1 ; i <= convertitLettreEnChiffre(lettre); i++) {
		diamant[convertitLettreEnChiffre(lettre) + i] = diamant[convertitLettreEnChiffre(lettre) - i]
	}

	return diamant;
}

function genereLigneDiamant(lettre, index_ligne){
	var ligne = "";

	ligne = indenteLigne(lettre, index_ligne);
	ligne += genereCorpsLigne(index_ligne);
	ligne += indenteLigne(lettre, index_ligne);

	return ligne;
}

function indenteLigne(lettre, index_ligne){
	var index_lettre = convertitLettreEnChiffre(lettre);

	return " ".repeat(index_lettre - index_ligne);
}

function genereCorpsLigne(index_ligne){
	var lettre = convertitChiffreEnLettre(index_ligne);
	var corps_ligne = lettre;

	for (var i= 1; i <= index_ligne; i++) {
		corps_ligne += " " + lettre;
	} 

	return corps_ligne;
}

function convertitLettreEnChiffre(lettre){
	return lettre.charCodeAt(0)-65;
}

function convertitChiffreEnLettre(chiffre){
	return String.fromCharCode(chiffre + 65)
}

function afficheDiamant(lettre){
	var diamant = genereDiamant(lettre);

	for (var i = 0; i < diamant.length; i++) {
    console.log(diamant[i]);
  }
}


module.exports = {
	genereDiamant,
	genereLigneDiamant,
	afficheDiamant
}