const { Router } = require('express')
const usersController = require('../controllers/usersController')
const verifyToken = require ('../middlewares/auth')

const userRoute = Router()

userRoute.get('/' , verifyToken,  usersController.getUsers )
userRoute.get('/id' , verifyToken, usersController.findByID )
userRoute.delete('/:id', verifyToken, usersController.deleteUser)
userRoute.delete('/', verifyToken,  usersController.deleteAllUsers )
userRoute.put('/:id', verifyToken, usersController.updateUser )

export default userRoute