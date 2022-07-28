const productsController = require('../controllers/products')
const { Router } = require('express')

const productsRouter = Router()
const products= productsController.getInstance()

productsRouter.post('/', products.saveProduct)
productsRouter.get('/', products.showProducts)
productsRouter.get('/:id', products.showProduct)
productsRouter.put('/:id', products.updateProduct)
productsRouter.delete('/:id', products.deleteProduct)


module.exports = productsRouter