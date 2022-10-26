// controllers/AdminController.js
const Admin = require('../models/Admin')


exports.home = function(req,res){
    res.render('homepage')
}

exports.login = function(req, res){
    
    //Obtiene el body de homepage.pug
    let usr = req.body.user;
    let pwd = req.body.password;
    console.log(usr)
    console.log(pwd)
    Admin.findOne({user:usr}, function(err, result){
        //Si el usuario no coincide manda

        if(err){
            console.log(err)
            return
        }
        if(result.password == pwd) {
            res.render('admin/create');
            return
        }
        //Si coincide se crea
        else{
            res.status(404).send('Usuario y/o contraseña incorrectos');
        }
    });
}

exports.dashboard = function(req, res){
    Admin.find({}, function(err, usr){
        console.log(usr)
        res.render("dashboard", {users:usr})
    })
}