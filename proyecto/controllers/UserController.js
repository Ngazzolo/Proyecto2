// controllers/UserController.js
const User = require('../models/Users')

exports.dashboard = function (req, res) {
    User.find({}, function (err, usr) {
        res.render("dashboard", { users: usr })
    })
}

exports.create = function (req, res) {

    // obtenemos el body del alta dle user
    //Obtiene el body de homepage.pug
    let qr = makeid(16);
    let nombre = req.body.nombre;
    let correo = req.body.correo;
    let estatus = 'Sin registrar';

    let temp_user = new User({ codigoQR: qr, nombre: nombre, correo: correo, estatus: estatus })
    User.add(temp_user)
    res.render('create')

    //let temp_user = new User(req.body.nombre, req.body.correo)
    //User.add(temp_user)
    //res.render('create')
}

exports.updateqr = function(req, res) {
    console.log(req.body)
    let userToFind = req.body;
    const filter = {codigoQR: userToFind};
    const updated = {estatus: 'Registrado'};

    console.log(filter)
    User.findOne({codigoQR: userToFind}, function (err, result) {
        if(err){
            console.log(err)
            return
        }
        if(result.estatus == 'Sin registrar'){
            User.findOneAndUpdate(filter, updated);
            //console.log(filter)
            res.render('homepage')
        }
        res.status(404).send('usuario ya registrado');
    });
}

exports.qr = function (req, res) {
    let cor = req.body.correo;

    User.findOne({ correo: cor }, function (err, result) {
        //Si el usuario no coincide manda
        if (err) { //si ta vacio se muestra
            console.log(err)
            return
        }
        console.log(result)
        if (result.correo == cor) {
            //console.log(result.codigoQR);
            res.render('qr', { qrtorender: result.codigoQR, qrname: result.nombre });

            return
        }
        //Si coincide se crea
        else {
            res.status(404).send('Correo incorrecto');
        }
    });
}

exports.usuario = function (req, res) {
    res.render("user")
}

exports.qrscan = function (req, res) {
    res.render("qrscan");
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
