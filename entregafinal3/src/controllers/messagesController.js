//const messageService = require ('../service/messageService')
import messageService from '../service/messageService.js'

class MessageController{
    async saveMessage(req,res){
        const {email, message} = req.body
        const newMessage = await messageService.saveMessage(email, message)
        return newMessage
    }

    async getMessages(req,res){
        const messages = await messageService.getMessages()
        res.send(messages) 
    }
    async getEmailMessages(req,res){{
        const email = req.params.email
        const messages = await messageService.getEmailMessages(email)
        res.send(messages)
    }}
}

export default new MessageController()