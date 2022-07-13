const {Router } = require('express');
const authController = require('../controllers/auth')

const router = Router();

router.get('/login', authController.renderLogin)
router.get('/register', authController.renderRegister)
router.post('/register', authController.register )
router.post('/login', authController.login )


module.exports = router