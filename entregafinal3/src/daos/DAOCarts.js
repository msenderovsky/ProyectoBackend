import Cart from '../models/carts'
import Product from '../models/products'

module.exports = class DAOCart{

    async showCartProducts() {
        const products = await Cart.products.find()
        return products
    }
   
    async addCart() {
        const newCart = await Cart.create({
            date: Date().toString()
        })
        return newCart
    }

    async showCarts(){
        const carts = await Cart.find()
        return carts
    }

    async showCart(id){
        const cart = await Cart.findById({_id: id})
        return cart 
    }
    
    async addCartProduct(cartID,productID, cant){
        const product = await Product.findById({_id:productID})
        product.cant = cant
        const addedProd = await Cart.updateOne({_id: cartID},{$addToSet: {products: product} }) ;
        return addedProd
    }

    
    async deleteCartProduct(cartID, product){
        const toDelete  = await Cart.updateOne({_id: cartID}, {$pull: {products:product}})
        return toDelete
    }

    async updateProduct(cartID, productID, cant){
        await this.deleteCartProduct(productID)
        const product = await Product.findById({_id:productID})
        product.cant = cant
        const updProd = await Cart.updateOne({_id: cartID},{$addToSet: {products: product} }) ;
       return updProd
    }

    async deleteCart(id){
        const toDelete = await Cart.deleteOne({_id: id})
        return toDelete
    }
}