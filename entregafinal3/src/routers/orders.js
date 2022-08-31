const ordersController = require('../controllers/ordersController')
const { Router } = require('express')
const { validOrderID } = require ('../middlewares/validOrderID')
const { validCartID } = require ('../middlewares/validCartID')
const { validOrderPost } = require ('../middlewares/validOrderPost')
const verifyToken = require ('../middlewares/auth')

const orderRoute = Router()

orderRoute.get('/', verifyToken, ordersController.listOrders)
orderRoute.get('/:orderID',[verifyToken, validOrderID], ordersController.listOrder)
orderRoute.post('/:cartID',[verifyToken,  validCartID],  ordersController.newOrder)
orderRoute.delete('/:idOrder', [verifyToken, validOrderID], ordersController.deleteOrder)
orderRoute.delete('/delete/all', verifyToken,  ordersController.deleteAllOrders)


export default  orderRoute