import {Router} from 'express'
import messagesController from '../controllers/messagesController.js'

const meesageRoute = Router()

meesageRoute.post('/' , messagesController.saveMessage)
meesageRoute.get('/', messagesController.getMessages)
meesageRoute.get('/:email', messagesController.getEmailMessages)

export default meesageRoute