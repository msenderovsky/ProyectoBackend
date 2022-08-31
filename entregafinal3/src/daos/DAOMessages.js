const Message = require ("../models/messages")

module.exports = class DAOMessages{
    async saveMessage(email, message){
        const save = await Message.create({
            date: Date.now(),
            email: email,
            body: message
        })
        return save
    }

    async getMessages(){
        const messages = await Message.find()
        return messages
    }

    async getEmailMessages(email){
        const messages = await Message.find({email:email})
        return messages
    }
}