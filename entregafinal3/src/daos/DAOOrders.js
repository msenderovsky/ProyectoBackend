//const Order = require('../models/orders')
import Order from "../models/orders"

class DAOOrders{

    async addOrder(cart, order, incOrder){
        if(!cart) return null
        const order = await Order.create(
                {   date: new Date(),
                    email: order.email,
                    adress: order.adress,
                    products: cart.products,
                    orderNumber: incOrder
                }
            )
        return order
    }

    async listOrder (orderID) {
        const toFind = await Order.findById({_id: orderID})
        return toFind
    }

    async listOrders () {
        const orders = await Order.find()
        return orders
    }

    async deleteByID(orderID){
        const toDelete = await Order.findByIdAndDelete(orderID)
        return toDelete
    }

    async deleteAllOrders(){
        const toDelete  = await Order.deleteMany({})
        return toDelete
    }
}

export default new DAOOrders