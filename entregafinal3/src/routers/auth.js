const {Router } = require('express');
const authController = require('../controllers/auth')

const router = Router();

routeAuth.post('/register', authController.register)
routeAuth.post('/login', authController.login)


module.exports = router