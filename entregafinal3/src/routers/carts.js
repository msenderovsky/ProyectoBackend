/*const cartsController = require('../controllers/cartsController')
const { Router } = require('express')
const { validCartID } = require ('../middlewares/validCartID')
const { validProductID } = require ('../middlewares/validProductID')
const verifyToken = require ('../middlewares/auth')
*/

import {Router} from 'express'
import cartsController from '../controllers/cartsController.js'
import {validCartID} from '../middlewares/validCartID.js'
import {validProductID} from '../middlewares/validProductID.js'
import verifyToken from '../middlewares/auth.js'

const cartRoute = Router()

cartRoute.get('/:cartID', cartsController.showCart)
cartRoute.get('/', cartsController.showCarts)
cartRoute.post('/', verifyToken, cartsController.addCart)
cartRoute.post('/:cartID/producto/:productID/cantidad/:cant', cartsController.addCartProduct)
cartRoute.delete('/:cartID', cartsController.deleteCart )
cartRoute.delete('/:cartID/producto/:productID', cartsController.deleteCartProduct)


export default cartRoute