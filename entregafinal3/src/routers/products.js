const productController = require('../controllers/products')
const { validProductPost }= require ('../middlewares/validProductPost')
const { validProductPut }= require ('../middlewares/validProductPut')
const { validProductID } = require ('../middlewares//validProductID')
const verifyToken = require ('../middlewares/auth')
const { Router } = require('express')

const productRoute = Router()

productRoute.get('/', verifyToken,  productController.showProducts )
productRoute.post('/', [verifyToken, validProductPost],  productController.saveProducts )
productRoute.get('/:idProduct', [verifyToken, validProductID], productController.showProduct)
productRoute.get('/categoria/:categoria', verifyToken, productController.findCategory)
productRoute.delete('/:idProduct', [verifyToken, validProductID] ,productController.deleteProduct)
productRoute.delete('/delete/all', verifyToken, productController.deleteAllProducts )
productRoute.put('/:idProduct', [verifyToken, validProductPut],  productController.updateProduct )

module.exports = productRoute