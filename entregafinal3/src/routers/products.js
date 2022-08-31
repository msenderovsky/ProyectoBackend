const productsController = require('../controllers/productsController')
const { validProductPost }= require ('../middlewares/validProductPost')
const { validProductPut }= require ('../middlewares/validProductPut')
const { validProductID } = require ('../middlewares//validProductID')
const verifyToken = require ('../middlewares/auth')
const { Router } = require('express')

const productRoute = Router()

productRoute.get('/', verifyToken,  productsController.showProducts )
productRoute.post('/', [verifyToken, validProductPost],  productsController.saveProducts )
productRoute.get('/:productID', [verifyToken, validProductID], productsController.showProduct)
productRoute.get('/categoria/:categoria', verifyToken, productsController.findCategory)
productRoute.delete('/:productID', [verifyToken, validProductID] ,productsController.deleteProduct)
productRoute.delete('/delete/all', verifyToken, productsController.deleteAllProducts )
productRoute.put('/:productID', [verifyToken, validProductPut],  productsController.updateProduct )

module.exports = productRoute