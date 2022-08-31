const MongoDBContainer = require('../container/MongoDBContainer')
//const myLoggerError= require ('../service/logger.js')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')
const Products = require('./DAOProducts')
const Order = require('../models/orders')

class DAOOrders extends MongoDBContainer{
    constructor(){
        super()
    }

    async addOrder(email,products){
        try{
            const order = new Order({
                date: Date().toString(),
                products: products,
                state: "generado",
                email: email
            })
            const savedOrder = await super.save(order)
            return savedOrder
        }catch(error){
            myLoggerError.error("Error in addOrder " + error)
        }
    }

    async listOrders () {
        try{
            const orders = await super.listSublist(Order, 'orders')
            return orders
        }catch(error){
            myLoggerError.error("Error in listOrders " + error)
        }
    }

    async deleteCart(id){
        try{
            const toDelete = await super.delete(Cart, id)
            return toDelete
        }catch(error){
            myLoggerError.error("Error in deleteOrder " + error)
        }
    }

    async findByID(ID){
        try{
            const cart = await super.showElement(Cart, ID)
            return cart
        }catch(error){
            myLoggerError.error("Error in findOrders " + error)
        }
    }
}

module.exports = new DAOOrders()