const MongoDBContainer = require('../container/MongoDBContainer')
//const myLoggerError= require ('../service/logger.js')
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')
const Products = require('./DAOProducts')
const Cart = require('../models/carts')

class DAOCarts extends MongoDBContainer{
    constructor(){
        super()
    }

    async addCart(userMail){
        try{
            const cart = new Cart({
                fecha: Date().toString(),
                email: userMail
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

    async showCartProducts(ID){
        try{
            const cart = await super.showElement(Cart, ID)
            return cart.products
        }catch(error){
            myLoggerError.error("Error in showCarts " + error)
        }
    }

    async addCartProduct(productID, cartID){
        try{
            const cart = await super.showElement(Cart, cartID)
            const prod= Products.showProduct(productID)
            cart.products.push(prod)
            await super.update(cart)
            console.log(cart)
            return cart
        }catch(error){
            console.log(error)
            myLoggerError.error("Error in addCartProduct " + error)
        }
    }

    async deleteCartProduct(productID, cartID){
        try{
            const cart = await super.showElement(Cart, cartID)
            cart.products = cart.products.filter(prod => prod != productID)
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
            myLoggerError.error("Error in findCart " + error)
        }
    }
}

module.exports = new DAOCarts()