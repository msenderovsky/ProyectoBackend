const MongoDBContainer = require('../../container/MongoDBContainer')
const myLoggerError= require ('../../service/logger.js')
const Product = require('../../models/products')
const Cart = require('../../models/carts')

class DAOCarts extends MongoDBContainer{
    constructor(){
        super()
    }

    async addCart(){
        try{
            const cart = new Cart({
                fecha: Date().toString()
            })
            const savedCart = await super.save(cart)
            return savedCart
        }catch(error){
            myLoggerError.error("Error in addCart " + error)
        }
    }


    async showCarts () {
        try{
            const carts = await super.listSublist(Cart, 'products')
            return carts
        }catch(error){
            myLoggerError.error("Error in showCarts " + error)
        }
    }


    async addCartProduct(productID, cartID){
        try{
            const cart = await super.showElement(Cart, cartID)
            cart.products.push(productID)
            await super.update(cart)
            console.log(cart)
            return cart
        }catch(error){
            console.log(error)
            //myLoggerError.error("Error in addCartProduct " + error)
        }
    }


    async deleteCartProduct(cartID, productID){
        try{
            const cart = await super.showElement(Cart, cartID)
            cart.products = cart.producto.filter(prod => prod != productID)
            await super.update(cart)
            return cart
        }catch(error){
            myLoggerError.error("Error in deleteCartProduct " + error)
        }
    }


    async deleteCart(id){
        try{
            const toDelete = await super.delete(Cart, id)
            return toDelete
        }catch(error){
            myLoggerError.error("Error in deleteCart " + error)
        }
    }


    async findByID(ID){
        try{
            const cart = await super.showElement(Cart, ID)
            return cart
        }catch(error){
            myLoggerError.error("Error in deleteCart " + error)
        }
    }
}

module.exports = new DAOCarts()