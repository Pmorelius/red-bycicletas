var Usuario = require('../models/usuario');

module.exports = {
    list: function(req, res, next){
        Usuario.find({}, (err, usuarios) => {
            res.render('usuarios/index', {usuarios: usuarios});    
    });
},

update_get: function(req, res, next){
     Usuario.findById(req.params.id, function(err, usuarios){
            res.render('usuarios/update', {errors:{}, usuario: usuario});
 });
},

update: function(req, res, next){
    var update_values = {nombre: req.body.nombre};
    Usuario.findByIdAndUpdate(req.params.id, update_values, function(err, usuario){
        if (err) {
            console.log(err);
            res.render('usuarios/update', {errors:{}, usuario: new Usuario()});
        }else{ 
            res.redirect('/usuarios');
            return;                
    }
 });
},

create_get: function(req, res, next){
     Usuario.findById(req.params.id, function(err, usuarios){
            res.render('usuarios/create', {errors:{}, usuario: new Usuario()});
 });
},

create: function(req, res, next){
    if (req.body.password != req.body.confirm_password) {
            console.log(err);
            res.render('usuarios/create', {errors: {confirm_password: {message: 'No coincide con el password ingresado'}}, usuario: new Usuario({nombre: req.body.nombre, email:req.body.email})}); 
       
            return;                
    }

    Usuario.create({ nombre: req.body.nombre, email: req.body.email, password: req.body.password, })
        if (err) {
            res.render('usuarios/create', {errors:{}, usuario: new Usuario()});
        }else{ 
            nuevoUsuario.enviar_email_bienvenida();
           res.redirect('/usuarios');
    }
 });
},

create: function(req, res, next){
    Usuario.findByIdAndDelete(req.body.id, function(err){
        if (err) {
            next(err);
        else
            res.redirect('/usuarios');
        });
    },
}
 


 