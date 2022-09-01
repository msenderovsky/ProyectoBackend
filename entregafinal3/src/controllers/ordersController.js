/*const orderService = require('../service/orderService')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')*/

import {myLoggerError} from '../service/logger.js'
import orderService from '../service/orderService.js'

class orderController {

    async listOrders(req,res){
        try {
            const orders = await orderService.listOrders()
            res.send(orders)
        } catch (error) {
            myLoggerError.error("Error in listOrders " + error)
        }
    }

    async listOrder(req,res){
        try {
            const orderID = req.params.orderID
            const toFind = await orderService.listOrder(orderID)
            res.send(toFind)
        } catch (error) {
            myLoggerError.error("Error in listOrder " + error)
        }
    }

    async newOrder(req,res){
        try {
            const cartID = req.params.cartID
            const order = req.body
            const newOrder = await orderService.newOrder(cartID, order)
            res.send(newOrder)
        } catch (error) {
            myLoggerError.error("Error in newOrder " + error)
        }
    }
    
    async deleteOrder(req,res){
        try {
            const orderID = req.params.orderID
            const toDelete = await orderService.deleteByID(orderID)
            res.send(toDelete)
        } catch (error) {
            myLoggerError.error("Error in deleteOrder " + error)
        }
    }
    async deleteAllOrders(req,res){
        try {
            const toDelete = await orderService.deleteAllOrders()
            res.send(toDelete)
        } catch (error) {
            myLoggerError.error("Error in deleteAllOrders " + error)
        }
    }
}


export default new orderController()