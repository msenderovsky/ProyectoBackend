const orderController = require('../controllers/orders')
const { Router } = require('express')
const { validOrderID } = require ('../middlewares/validOrderID')
const { validCartID } = require ('../middlewares/validCartID')
const { validOrderPost } = require ('../middlewares/validOrderPost')
const verifyToken = require ('../middlewares/auth')

const orderRoute = Router()

orderRoute.get('/', verifyToken, orderController.listOrders)
orderRoute.get('/:orderID',[verifyToken, validOrderID], orderController.listOrder)
orderRoute.post('/:cartID',[verifyToken,  validCartID],  orderController.newOrder)
orderRoute.delete('/:idOrder', [verifyToken, validOrderID], orderController.deleteOrder)
orderRoute.delete('/delete/all', verifyToken,  orderController.deleteAllOrders)


export default  orderRoute