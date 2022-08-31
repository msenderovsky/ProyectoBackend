const { Router } = require('express')
const messagesController = require('../controllers/messagesController')

const meesageRoute = Router()


meesageRoute.post('/' , messagesController.saveMessage)
meesageRoute.get('/', messagesController.getMessages)
meesageRoute.get('/:email', messagesController.getEmailMessages)

export default meesageRoute