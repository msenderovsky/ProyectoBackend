const cartsController = require('../controllers/cartsController')
const { Router } = require('express')
const { validCartID } = require ('../middlewares/validCartID')
const { validProductID } = require ('../middlewares/validProductID')
const verifyToken = require ('../middlewares/auth')

const cartRoute = Router()

cartRoute.get('/:cartID', validCartID, cartsController.showCart)
cartRoute.get('/',  cartsController.showCarts)
cartRoute.post('/', verifyToken,  cartsController.addCart)
cartRoute.post('/:cartID/producto/:productID/cantidad/:cant', validCartID,validProductID, cartsController.addCartProduct)
cartRoute.delete('/:cartID', validCartID, cartsController.deleteCart )
cartRoute.delete('/:cartID/producto/:productID', validCartID, validProductID, cartsController.deleteCartProduct)


module.exports = cartRoute