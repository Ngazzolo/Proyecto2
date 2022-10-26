// controllers/AdminController.js

let Admin = require('../models/Admin')


exports.home = function(req,res){
    res.render('homepage')
}

exports.login = function(req,res){
    res.render('create')
}


exports.dashboard = function(req,res){
    res.render('dashboard')
}