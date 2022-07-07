const {Schema, model} = require('mongoose')

const usersSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    email: String,
    phone: String,
    image: String,
    username: String,
    password: String
})


module.exports = model('users', usersSchema)