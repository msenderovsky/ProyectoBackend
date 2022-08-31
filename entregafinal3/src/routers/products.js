/*const productsController = require('../controllers/productsController')
const { validProductPost }= require ('../middlewares/validProductPost')
const { validProductPut }= require ('../middlewares/validProductPut')
const { validProductID } = require ('../middlewares//validProductID')
const verifyToken = require ('../middlewares/auth')
const { Router } = require('express')
*/

import {Router} from 'express'
import productsController from '../controllers/productsController.js'
import { validProductPost } from '../middlewares/validProductPost.js'
import { validProductID } from '../middlewares//validProductID.js'
import verifyToken from '../middlewares/auth.js'


const productRoute = Router()

//console.log(productsController.showProducts())

productRoute.get('/', verifyToken, productsController.showProducts )
productRoute.post('/', [verifyToken, validProductPost], productsController.saveProducts )
productRoute.get('/:productID', [verifyToken, validProductID], productsController.showProduct)
productRoute.get('/categoria/:categoria', verifyToken, productsController.findCategory)
productRoute.delete('/:productID', [verifyToken, validProductID], productsController.deleteProduct)
productRoute.delete('/delete/all', verifyToken, productsController.deleteAllProducts )
productRoute.put('/:productID', [verifyToken, validProductID], productsController.updateProduct )



export default productRoute