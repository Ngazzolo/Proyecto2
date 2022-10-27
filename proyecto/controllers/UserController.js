// controllers/UserController.js
const User = require('../models/Users')

exports.dashboard = function(req, res){
    User.find({}, function(err, usr){
        console.log(usr)
        res.render("dashboard", {users:usr})
    })
}

exports.create = function(req, res){
    
    // obtenemos el body del alta dle user
    //Obtiene el body de homepage.pug
    let qr = makeid(16);
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let estatus = 'Sin registrar'; 

    let temp_user = new User({codigoQR:qr, nombre:nombre, correo:correo, estatus:estatus})
    User.add(temp_user)
    res.render('create')

    //let temp_user = new User(req.body.nombre, req.body.correo)
    //User.add(temp_user)
    //res.render('create')
}

exports.usuario = function(req, res){
    let cor = req.body.correo;
    
    User.find({}, function(err, result){
        //Si el usuario no coincide manda

        if(err){
            console.log(err)
            return
        }
        if(result.correo == cor) {
            res.render('qr');
            return
        }
        //Si coincide se crea
        else{
            res.status(404).send('Correo incorrecto');
        }
    });
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

