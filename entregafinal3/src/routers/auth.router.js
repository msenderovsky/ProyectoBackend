const {Router } = require('express');
const authControler = require('../controllers/auth.controller')

const router = Router();

router.get('/login', authControler.renderLogin)
router.get('/register', authControler.renderRegister)
router.post('/register', authControler.register )
router.post('/login', authControler.login )


module.exports = router