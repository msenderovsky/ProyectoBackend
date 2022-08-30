const cartController = require('../controllers/carts')
const { Router } = require('express')
const TEST_MAIL = process.env.MIMAIL2
const { sendMail} = require('../config/nodemailer')
const sms = require('../config/twilioSMS')
const jwt= require('jsonwebtoken')

const cartRoute = Router()

//cartRoute.get('/', cartController.showCart)
cartRoute.get('/compra/:id', async(req,res)=>{
    try{
        const token= req.headers.token
        const datos= jwt.verify(token,'clave_secreta')
        console.log(datos)
        const cart= await cartController.findByID(req.params.id)
        const total= cart.products.reduce((total, product) => total+product.price, 0)
        //const message= `Hola ${user.username}, tu compra fue realizada exitosamente`

        sendMail(TEST_MAIL, JSON.stringify(cart))
        //sms.sendSMS(TEST_MAIL, JSON.stringify(cart.products))
        //const user= await userController.

        res.json({
            message: "Compra realizada exitosamente",
            cart: cart,
            user: {name: datos.name, age: datos.age, address: datos.address, email: datos.email, id: datos.id},
            products: cart.products,
            total: total
        })

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Error realizando la compra"})
    }
})

cartRoute.get('/', cartController.showCartProducts)
cartRoute.put('/', cartController.addCartProduct)
cartRoute.delete('/', cartController.deleteCartProduct)
cartRoute.delete('/:id', cartController.deleteCart)


module.exports = cartRoute