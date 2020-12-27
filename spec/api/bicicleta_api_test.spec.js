vvar mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');
var server = require('../../bin/www');
var request = require('request');

var base_url = "http://localhost:5000/api/bicicletas";


describe('Bicicletas API', ()=>{
    
    beforeAll(async ()=>{
        await mongoose.disconnect();
    });
    

    beforeAll(function(done){

        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, { useNewUrlParser: true  }, function(){
            done();
        });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console,'connection error'));
        db.once('open',function(){
            console.log('we are connected to test database');
        }); 
        
    });


    afterEach(function(done){
        Bicicleta.deleteMany({},function( err, success){
            if (err) console.log(err);
            //mongoose.disconnect(err)
            done();
        });
    });   

    describe('GET BICICLETAS /', ()=>{
        it('Status 200', function(done){
            request.get('http://localhost:3000/api/bicicletas',function(error,response,body){
                var result = JSON.parse(body).bicicletas;
                expect(response.statusCode).toBe(200)
                expect(result).toEqual([]);
                done();
            });
        });
    });

    describe('POST BICICLETAS / create',()=>{
        it ('status 200',(done)=>{
            var headers ={'content-type': 'application/json'};
            var aBici = '{"id":"4", "color":"verde", "modelo":"urbana", "lat": 4.626408,"lng": -74.149127}';
            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: aBici,
            },function( err, response, body ){
                expect(response.statusCode).toBe(200);
                var bici = JSON.parse(body).bicicleta;
                expect(bici.color).toBe("verde");
                expect(bici.modelo).toBe("urbana");
                expect(bici.ubicacion[0]).toBe(4.626408);
                expect(bici.ubicacion[1]).toBe(-74.149127);
                done();
            });
        });
    });  
    
    

    describe('Delete BICICLETAS / delete',()=>{
        it ('status 204',(done)=>{
            var bici = Bicicleta.createInstance(5,"verde","urbana",[-27.5,55.1]);
            bici.save();
            var headers ={'content-type': 'application/json'};
            var aBici = '{"id":"5"}';
            request.delete({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/delete',
                body: aBici,
            },function( err, response, body ){
                expect(response.statusCode).toBe(204);
                done();
            });
        });
    });

    describe('update BICICLETAS / update',()=>{
        it ('status 200',(done)=>{
            var bici = Bicicleta.createInstance(5,"verde","urbana",[-27.5,55.1]);
            bici.save();
            var headers ={'content-type': 'application/json'};
            var aBici = '{"id":"5", "color":"verde", "modelo":"ruta", "lat": 4.626408,"lng": -74.149127}';
            request.put({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/update',
                body: aBici,
            },function( err, response, body ){
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });

});
