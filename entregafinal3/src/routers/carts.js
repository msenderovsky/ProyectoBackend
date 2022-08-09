const cartController = require('../controllers/carts')
const userController = require('../controllers/auth')
const { Router } = require('express')
const TEST_MAIL = process.env.MIMAIL2
const mail = require('../config/nodemailer')
const sms = require('../config/twilioSMS')

const cartRoute = Router()

cartRoute.get('/', cartController.showCarts)
cartRoute.get('./carts/compra/:id/', async(req,res)=>{
    try{
        const cart= await cartController.findByID(req.params.id)
        const products= await productController.find({ _id:{$in: cart.products}})
        const total= products.reduce((total, product) => total+product.price, 0)
        //const message= `Hola ${user.username}, tu compra fue realizada exitosamente`

        mail.sendMail(TEST_MAIL, JSON.stringify(cart.products))
        //sms.sendSMS(TEST_MAIL, JSON.stringify(cart.products))
        //const user= await userController.

        res.json({
            message: "Compra realizada exitosamente",
            cart: cart,
            user: user,
            products: products,
            total: total
        })

    }catch(error){
        res.status(500).json({message:"Error realizando la compra"})
    }
})
cartRoute.post('/', cartController.addCart)
cartRoute.post('/:idCarrito/producto/:id', cartController.addCartProduct)
cartRoute.delete('/:idCarrito/producto/:id', cartController.deleteCartProduct)
cartRoute.delete('/:id', cartController.deleteCart)


module.exports = cartRoute