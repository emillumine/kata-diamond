var assert = require('assert');
var genereDiamant = require('../diamond.js');


describe('diamond', function() {

  it('affiche le diamant de A', function() {
  	var lettre = 'A';
  	var diamant_attendu = ["A"];

  	var resultat = genereDiamant(lettre);

    assert.equal(diamant_attendu[0], resultat[0]);
  });

  it('affiche le diamant de B', function() {
  	var lettre = 'B';
  	var diamant_attendu = [" A ","B B"," A "];

  	var resultat = genereDiamant(lettre);

  	for (var i = 0; i < 2; i++){
	  	assert.equal(diamant_attendu[i], resultat[i]);
  	}
  });

  it('affiche le diamant de C', function() {
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



 });
