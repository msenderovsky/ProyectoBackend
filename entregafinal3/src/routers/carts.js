const cartController = require('../controllers/carts')
const { Router } = require('express')
const { validCartID } = require ('../middlewares/validCartID')
const { validProductID } = require ('../middlewares/validProductID')
const verifyToken = require ('../middlewares/auth')

const cartRoute = Router()

routeCart.get('/:idCart', validCartID, cartController.showCart)
routeCart.get('/',  cartController.showCarts)
routeCart.post('/', verifyToken,  cartController.addCart)
routeCart.post('/:idCart/producto/:idProduct/cantidad/:quantity', validCartID,validProductID, cartController.addCartProduct)
routeCart.delete('/:idCart', validCartID, cartController.deleteCart )
routeCart.delete('/:idCart/producto/:idProduct', validCartID, validProductID, cartController.deleteCartProduct)


module.exports = cartRoute