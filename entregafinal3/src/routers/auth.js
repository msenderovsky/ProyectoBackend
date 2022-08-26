const {Router } = require('express');
const authController = require('../controllers/auth')

const router = Router();

/*router.get('/login', authController.renderLogin)
router.get('/register', authController.renderRegister)
router.post('/register', authController.register )
router.post('/login', authController.login )*/

router.get('/products', authController.renderLogin)
router.post('/products', authController.login)
router.post ('/', authController.renderBoth)
router.get ('/', authController.renderBoth)


module.exports = router