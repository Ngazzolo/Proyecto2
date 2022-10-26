// controllers/UserController.js
const User = require('../models/Users')

exports.dashboard = function(req, res){
    User.find({}, function(err, usr){
        console.log(usr)
        res.render("dashboard", {users:usr})
    })
}

