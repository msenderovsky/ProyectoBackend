const DAOMessages = require ("../daos/DAOMessages")

module.exports = class Messages{

    async saveMessage(email, message){
        const save = await DAOMessages.saveMessage(email, message)
        return save
    }

    async getMessages(){
        const messages = await DAOMessages.getMessages()
        return messages
    }

    async getEmailMessages(email){
        const messages = await DAOMessages.getEmailMessages(email)
        return messages
    }
}