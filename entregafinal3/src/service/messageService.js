import DAOMessages from "../daos/DAOMessages.js"

class messageService{

    async saveMessage(email, message){
        console.log(email)
        console.log(message)
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
export default new messageService()