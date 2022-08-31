const { Router } = require('express')
const messageController = require('../controllers/message')

const meesageRoute = Router()


meesageRoute.post('/' , messageController.saveMessage)
meesageRoute.get('/', messageController.getMessages)
meesageRoute.get('/:email', messageController.getEmailMessages)

export default meesageRoute