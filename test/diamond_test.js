var assert = require('assert');
var genereDiamant = require('../diamond.js').genereDiamant;
var genereLigneDiamant = require('../diamond.js').genereLigneDiamant;
var afficheDiamant = require('../diamond.js').afficheDiamant;

describe('diamond', function() {

  it('genere le diamant de A', function() {
  	var lettre = 'A';
  	var diamant_attendu = ["A"];

  	var resultat = genereDiamant(lettre);

    assert.equal(diamant_attendu[0], resultat[0]);
  });

  it('genere le diamant de B', function() {
  	var lettre = 'B';
  	var diamant_attendu = [" A ","B B"," A "];

  	var resultat = genereDiamant(lettre);

  	for (var i = 0; i < 2; i++){
	  	assert.equal(diamant_attendu[i], resultat[i]);
  	}
  });

  it('genere le diamant de C', function() {
		var lettre = 'C';
		var diamant_attendu = ["  A  "," B B ","C C C"," B B ","  A  "];

		for (var i = 0; i < diamant_attendu.length; i++) {
			console.log(diamant_attendu[i]);
		}

		var resultat = genereDiamant(lettre);

		for (var i = 0; i < diamant_attendu.length; i++){
	  	assert.equal(diamant_attendu[i], resultat[i]);
		}
	});

  it('remplit la première ligne du diamant de D dans le diamant de D', function() {
    var lettre = 'D';
    var ligne_attendue = "   A   ";

    var resultat = genereDiamant(lettre);

    assert.equal(ligne_attendue, resultat[0]);
  });

  it('remplit la deuxième ligne du diamant de D dans le diamant de D', function() {
    var lettre = 'D';
    var ligne_attendue = "  B B  ";

    var resultat = genereDiamant(lettre);

    assert.equal(ligne_attendue, resultat[1]);
  });

  it('genere la deuxième ligne du diamant de D', function () {
    var lettre = 'D';
    var index_ligne = 1;
    var ligne_attendue = "  B B  ";

    var resultat = genereLigneDiamant(lettre, index_ligne);

    assert.equal(ligne_attendue, resultat)
  });

  it('genere la troisième ligne du diamant de D', function () {
    var lettre = 'D';
    var index_ligne = 2;
    var ligne_attendue = " C C C ";

    var resultat = genereLigneDiamant(lettre, index_ligne);

    assert.equal(ligne_attendue, resultat)
  });

  it('genere le diamant de D', function() {
    var lettre = 'D';
    var diamant_attendu = ["   A   ", "  B B  ", " C C C ", "D D D D", " C C C ", "  B B  ", "   A   "];

    for (var i = 0; i < diamant_attendu.length; i++) {
      console.log(diamant_attendu[i]);
    }

    var resultat = genereDiamant(lettre);

    for (var i = 0; i < diamant_attendu.length; i++){
      assert.equal(diamant_attendu[i], resultat[i]);
    }
  });

 });
