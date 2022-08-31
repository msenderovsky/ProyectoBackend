const DAOMessages = require ("../daos/DAOMessages")

module.exports = class Messages{
    async saveMessage(email, message){
        const save = await Message.saveMessage(email, message)
        return save
    }

    async getMessages(){
        const messages = await Message.getMessages()
        return messages
    }

    async getMessagesByEmail(email){
        const messages = await Message.getMessagesByEmail(email)
        return messages
    }
}