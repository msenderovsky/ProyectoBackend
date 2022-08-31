const cartController = require('../controllers/carts')
const { Router } = require('express')
const { validCartID } = require ('../middlewares/validCartID')
const { validProductID } = require ('../middlewares/validProductID')
const verifyToken = require ('../middlewares/auth')

const cartRoute = Router()

cartRoute.get('/:cartID', validCartID, cartController.showCart)
cartRoute.get('/',  cartController.showCarts)
cartRoute.post('/', verifyToken,  cartController.addCart)
cartRoute.post('/:cartID/producto/:productID/cantidad/:cant', validCartID,validProductID, cartController.addCartProduct)
cartRoute.delete('/:cartID', validCartID, cartController.deleteCart )
cartRoute.delete('/:cartID/producto/:productID', validCartID, validProductID, cartController.deleteCartProduct)


module.exports = cartRoute