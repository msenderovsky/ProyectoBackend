const { Router } = require('express')
const userController = require('../controllers/users')
const verifyToken = require ('../middlewares/auth')

const userRoute = Router()

userRoute.get('/' , verifyToken,  userController.getUsers )
userRoute.get('/id' , verifyToken, userController.findByID )
userRoute.delete('/:id', verifyToken, userController.deleteUser)
userRoute.delete('/', verifyToken,  userController.deleteAllUsers )
userRoute.put('/:id', verifyToken, userController.updateUser )

export default userRoute