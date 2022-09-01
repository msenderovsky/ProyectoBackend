/*const DAOCarts = require ("../daos/DAOCarts")
const DAOOrders = require ("../daos/DAOOrders")
const sendMail = require("../config/nodemailer.js").default
*/
import DAOCarts from "../daos/DAOCarts.js"
import DAOOrders from "../daos/DAOOrders.js"
import sendMail from "../config/nodemailer.js"

class orderService {

    async listOrders(){
        const orders = await DAOOrders.listOrders()
        return orders
    }

    async listOrder(orderID){
        const toFind = await DAOOrders.listOrder(orderID)
        return toFind
    }

    async newOrder(cartID,order){
        const cart = await DAOCarts.showCart(cartID)
        const orders = await this.listOrders()
        const lastOrder = orders.at(-1) 
        let incOrder; 
        if(orders.length !== 0 ){
            incOrder = lastOrder.orderNumber + 1
        } else {
            incOrder = 1
        }
        const newOrder = await DAOOrders.newOrder(cart,order, incOrder)
        await sendMail(newOrder)
        await DAOCarts.deleteCart(cartID) 
        return newOrder
    }

    async deleteByID(orderID){
        const toDelete = await DAOOrders.deleteByID(orderID)
        return toDelete
    }
    async deleteAllOrders(){
        const toDelete = await DAOOrders.deleteAllOrders()
        return toDelete
    }

}

export default new orderService()