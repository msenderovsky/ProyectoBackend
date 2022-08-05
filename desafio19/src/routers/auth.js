const {Router } = require('express');
const authController = require('../controllers/auth')

const authRouter = Router();

const auth= authController.getInstance()

authRouter.get('/login', auth.renderLogin)
authRouter.get('/register', auth.renderRegister)
authRouter.post('/register', auth.register )
authRouter.post('/login', auth.login )


module.exports = authRouter