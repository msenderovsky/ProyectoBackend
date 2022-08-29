const productController = require('../controllers/products')
const { Router } = require('express')

const products = Router()

//products.post('/', productController.saveProduct)
products.get('/', productController.showProducts)
products.get('/:id', productController.showProduct)
products.get('/:category', productController.showProducts)
products.put('/:id', productController.updateProduct)
products.delete('/:id', productController.deleteProduct)


module.exports = products