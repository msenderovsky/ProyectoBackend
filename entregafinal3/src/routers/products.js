const productController = require('../controllers/products')
const authController = require('../controllers/auth')
const { Router } = require('express')
const jwt = require('jsonwebtoken');

const products = Router()

//products.post('/', productController.saveProduct)
products.get('/', productController.showProducts)
products.get('/:id', productController.showProduct)
products.get('/', authController.authenticateToken, productController.showProducts)
products.get('/:categoria', productController.showCategory)
products.put('/:id', productController.updateProduct)
products.delete('/:id', productController.deleteProduct)


module.exports = products