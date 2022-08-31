const DAOCarts = require ("../daos/DAOCarts")
const DAOOrders = require ("../daos/DAOrders")
const sendMail = require ("../config/nodemailer.js")

module.exports = class orderService {

    async listOrders(){
        const orders = await DAOOrders.listOrders()
        return orders
    }

    async listOrder(orderID){
        const toFind = await DAOOrders.listOrder(orderID)
        return toFind
    }

    async addOrder(cartID,order){
        const cart = await DAOCarts.showCart(cartID)
        const orders = await listOrders()
        const lastOrder = orders.at(-1) 
        let incOrder; 
        if(orders.length !== 0 ){
            incOrder = lastOrder.numberOrder + 1
        } else {
            incOrder = 1
        }
        const newOrder = await DAOOrders.addOrder(cart,order, incOrder)
        await sendMail(newOrder)
        await DAOCarts.deleteCart(cartID) 
        return newOrder
    }

    async deleteByID(orderID){
        const toDelete = await DAOOrders.deleteById(orderID)
        return toDelete
    }
    async deleteAllOrders(){
        const toDelete = await DAOOrders.deleteAllOrders()
        return toDelete
    }

}