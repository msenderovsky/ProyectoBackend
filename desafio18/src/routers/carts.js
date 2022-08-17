const cartController = require('../controllers/carts')
const productController = require('../controllers/products')
const { Router } = require('express')
const TEST_MAIL = process.env.MIMAIL2
const mail = require('../config/nodemailer')
const sms = require('../config/twilioSMS')
const jwt = require('jsonwebtoken')

const cartRouter = Router()

const cart= cartController.getInstance()
const prod= productController.getInstance()

cartRouter.get('/', cart.showCarts)
cartRouter.get('/compra/:id/', async(req,res)=>{
    try{
        
        const cart= await cart.findByID(req.params.id)
        const products= await prod.find({ _id:{$in: cart.products}})
        const total= products.reduce((total, product) => total+product.price, 0)
        const message= `Hola ${user.username}, tu compra fue realizada exitosamente`
        
        mail.sendMail('msenderovsky@gmail.com', message, user)
        sms.sendSMS(TEST_MAIL, message)
        //const user= await userController.

        res.json({
            message: "Compra realizada exitosamente",
            cart: cart,
            user: user,
            products: products,
            total: total
        })

    }catch(error){
        console.log (error)
        res.status(500).json({message:"Error realizando la compra"})
    }
})
cartRouter.post('/', cart.addCart)
cartRouter.post('/:idCarrito/product/:id', cart.addCartProduct)
cartRouter.delete('/:idCarrito/product/:id', cart.deleteCartProduct)
cartRouter.delete('/:id', cart.deleteCart)


module.exports = cartRouter