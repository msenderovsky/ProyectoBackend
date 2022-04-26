const CartController= require ('../controllers/cart')
const {Router} = require ('express')

const Cart = require('../models/cart')

const route= Router()

route.post('/', CartController.addCart)
route.get('/', CartController.getCarts)
route.get('/:id', CartController.getCart)
route.post('/:cartID/product/:id', CartController.addProduct)
route.delete('/:cartID/product/:id', CartController.deleteCartProduct)
route.delete('/:id', CartController.deleteCart)

module.exports= new route