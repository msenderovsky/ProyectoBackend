import {Router} from 'express'
import productsController from '../controllers/productsController.js'
import verifyToken from '../middlewares/auth.js'


const productRoute = Router()

productRoute.get('/', verifyToken, productsController.showProducts )
productRoute.post('/', verifyToken, productsController.saveProducts )
productRoute.get('/:productID', verifyToken, productsController.showProduct)
productRoute.get('/categoria/:categoria', verifyToken, productsController.findCategory)
productRoute.delete('/:productID', verifyToken, productsController.deleteProduct)
productRoute.delete('/delete/all', verifyToken, productsController.deleteAllProducts )
productRoute.put('/:productID', verifyToken, productsController.updateProduct )


export default productRoute