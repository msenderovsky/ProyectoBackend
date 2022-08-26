const {Schema, model} = require('mongoose')

const usersSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String
})


module.exports = model('users', usersSchema)