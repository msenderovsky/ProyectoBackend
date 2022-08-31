const {Router } = require('express');
const authController = require('../controllers/auth')

const router = Router();

//router.get('/products', authController.renderLogin)
router.post('/productos', authController.login)
router.post ('/', authController.register)
router.get ('/', authController.renderBoth)


module.exports = router