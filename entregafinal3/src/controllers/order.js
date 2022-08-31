require('dotenv').config()
const DAOOrders = require('../daos/DAOOrders')
const cartController = require('./carts')
const TEST_MAIL = process.env.MIMAIL2
const { sendMail} = require('../config/nodemailer')

class orderController {
    constructor(){
    }

    async addOrder(req,res){
        
        const cart = await cartController.findByID(req.body.email)
        const savedOrder = await DAOOrders.addOrder(cart.email, cart.products)
        savedOrder.orderNumber= DAOOrders.showOrders().length
        const user= req.body.name
        res.status(201).send(savedOrder)

        try{
            const token= req.headers.token
            const datos= jwt.verify(token,'clave_secreta')
            console.log(datos)
            const total= cart.products.reduce((total, product) => total+product.price, 0)
            sendMail(TEST_MAIL, JSON.stringify(cart), user)
    
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
    }

    async findByID(id){
        const order = await DAOOrders.findByID(id)
        res.send(order)
    }
}

module.exports = new orderController()