// controllers/AdminController.js
const Admin = require('../models/Admin')


exports.home = function(req,res){
    res.render('homepage')
}

exports.login = (req, res) => {
    
    //Obtiene el body de homepage.pug
    let admin = req.body.admin;

    Admin.find(admin).then((admins) => {
        //Si el usuario no coincide manda

        if(admins.user != 'Nicolas' && admins.password != 'nico1234') {
            res.status(404).send('Usuario y/o contraseña incorrectos');
        }
        //Si coincide se crea
        res.render('create');
    });
}

exports.dashboard = function(req, res){
    Admin.find({}, function(err, usr){
        res.render("dashboard", {users:usr})
    })
}