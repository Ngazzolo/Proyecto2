const mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
    codigoQR: { type: String, required: true },
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    estatus: { type: String, required: true }
})

UserSchema.statics.allUsers = function allUsers(cb) {
    /*
    Usuarios.find({}, function(err, usr){
        res.render("/",{user: usr})
    })
    */
    return this.find({}, cb)
}

UserSchema.statics.createInstance = function (codigoQR, nombre, correo, estatus) {
    return new this({
        codigoQR: codigoQR,
        nombre: nombre,
        correo: correo,
        estatus: estatus
    })
}

UserSchema.statics.add = function (aUser, cb) {
    this.create(aUser, cb)
}

//UserSchema.statics.updates = function (aUser, filter, cb) {
//    this.findOneAndUpdate(aUser, filter)
//}

module.exports = mongoose.model('User', UserSchema)