// controllers/AdminController.js
const Admin = require('../models/Admin')


exports.home = function(req,res){
    res.render('homepage')
}

exports.login = function(req, res){
    
    //Obtiene el body de homepage.pug
    let usr = req.body.user;
    let pwd = req.body.password;
    
    Admin.findOne({user:usr}, function(err, result){
        //Si el usuario no coincide manda

        if(err){
            console.log(err)
            return
        }
        if(result.password == pwd) {
            res.render('create');
            return
        }
        //Si coincide se crea
        else{
            res.status(404).send('Usuario y/o contraseña incorrectos');
        }
    });
}