const mongoose = require('mongoose')
let Schema = mongoose.Schema

let AdminSchema = new Schema({
    type: {type: String, required: true},
    user: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model('Admin', AdminSchema)