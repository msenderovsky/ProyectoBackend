import {Router} from 'express'
import ordersController from '../controllers/ordersController.js'
import verifyToken from '../middlewares/auth.js'

const orderRoute = Router()

orderRoute.get('/', verifyToken, ordersController.listOrders)
orderRoute.get('/:orderID',verifyToken, ordersController.listOrder)
orderRoute.post('/:cartID',verifyToken, ordersController.newOrder)
orderRoute.delete('/:orderID', verifyToken, ordersController.deleteOrder)
orderRoute.delete('/delete/all', verifyToken,  ordersController.deleteAllOrders)


export default  orderRoute