//vamos a manejar todo lo que tiene que ver con las Bicicletas
var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function(req, res){
	res.render('bicicletas/index', {bicis: Bicicleta.allBicis});
}