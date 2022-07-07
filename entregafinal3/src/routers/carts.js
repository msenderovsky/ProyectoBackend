const cartController = require('../controllers/carts')
const { Router } = require('express')

const route = Router()

route.get('/', cartController.showCarts)
route.post('/', cartController.addCart)
route.post('/:idCarrito/producto/:id', cartController.addCartProduct)
route.delete('/:idCarrito/producto/:id', cartController.deleteCartProduct)
route.delete('/:id', cartController.deleteCart)


module.exports = route