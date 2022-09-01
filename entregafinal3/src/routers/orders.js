/*const ordersController = require('../controllers/ordersController')
const { Router } = require('express')
const { validOrderID } = require ('../middlewares/validOrderID')
const { validCartID } = require ('../middlewares/validCartID')
const { validOrderPost } = require ('../middlewares/validOrderPost')
const verifyToken = require ('../middlewares/auth')
*/

import {Router} from 'express'
import ordersController from '../controllers/ordersController.js'
import {validOrderID} from '../middlewares/validOrderID.js'
import {validCartID} from '../middlewares/validCartID.js'
import { validOrderPost } from '../middlewares/validOrderPost.js'
import verifyToken from '../middlewares/auth.js'


const orderRoute = Router()

orderRoute.get('/', verifyToken, ordersController.listOrders)
orderRoute.get('/:orderID',verifyToken, ordersController.listOrder)
orderRoute.post('/:cartID',verifyToken, ordersController.newOrder)
orderRoute.delete('/:orderID', verifyToken, ordersController.deleteOrder)
orderRoute.delete('/delete/all', verifyToken,  ordersController.deleteAllOrders)


export default  orderRoute