//este proceso se realiza para avanzar sin haber creado una base de datos
var Bicicleta = function (id, modelo, ubicacion) {
	this.id = id;
	this.color = color;
	this.modelo = modelo;
	this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function (){
	return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
	Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1, 'rojo', 'urbana', [3.472695,-76.4950865]);
var b = new Bicicleta(2, 'blanca', 'urbana', [3.4728267,-76.4933002]);

Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;