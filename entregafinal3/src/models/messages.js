const {Schema, model} = require('mongoose')

const messagesSchema = new Schema({
    date : Date,
    email: {
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true
    }
})

module.exports = model('messages', messagesSchema)