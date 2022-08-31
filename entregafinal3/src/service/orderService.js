const DAOCarts = require ("../daos/DAOCarts")
const DAOOrders = require ("../daos/DAOrders")
const sendMail = require ("../config/nodemailer.js")

module.exports = class orderService {
    async getOrders(){
        const getOrders = await DAOOrders.getOrders()
        return getOrders
    }

    async getOrder(orderID){
        const getOrder = await DAOOrders.getOrder(idOrder)
        return getOrder
    }

    async generateOrder(cartID,order){
        const cart = await CartDao.getCartById(cartID)
        const orders = await this.getOrders()
        const lastOrder = orders.at(-1) 
        let incNumberOrder; 
        
        if(orders.length !== 0 ){
            incNumberOrder = lastOrder.numberOrder + 1
        } else {
            incNumberOrder = 1
        }
        
        const generate = await DAOCarts.generateOrder(cart,order, incNumberOrder)
        await sendMail(generate)
        await DAOCarts.deleteCartById(idCart) 
        return generate
    }

    async deleteOrderById(orderID){
        const toDelete = await DAOOrders.deleteOrderById(orderID)
        return toDelete
    }
    async deleteAllOrders(){
        const toDelete = await DAOOrders.deleteAllOrders()
        return toDelete
    }

}