const MongoDBContainer = require('../../container/MongoDBContainer')
const Product = require('../../models/products')
const Cart = require('../../models/carts')

class DAOCarts extends MongoDBContainer{
    constructor(){
        super()
    }

    async addCart(){
        const cart = new Cart({
            fecha: Date().toString()
        })
        const savedCart = await super.save(cart)
        return savedCart
    }


    async showCarts () {
        const carts = await super.listSublist(Cart, 'products')
        return carts
    }


    async addCartProduct(productID, cartID){
        const cart = await super.showElement(Cart, cartID)
        cart.products.push(productID)
        await super.update(cart)
        console.log(cart)
        return cart
    }


    async deleteCartPRoduct(cartID, productID){
        const cart = await super.showElement(Cart, cartID)
        cart.products = cart.producto.filter(prod => prod != productID)
        await super.update(cart)
        return cart
    }


    async deleteCart(id){
        const toDelete = await super.delete(Cart, id)
        return toDelete
    }
}

module.exports = new DAOCarts()