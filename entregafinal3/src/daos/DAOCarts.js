import Cart from '../models/carts'
import Product from '../models/products'

module.exports = class DAOCart{

    async addCart() {
        const addedCart = await Cart.create({
            date: Date().toString()
        })
        return addedCart
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
        const addedProd = await Cart.updateOne({_id: cartID},{$addToSet: {products: product} }) ;
      
       return addedProd
    }

    async deleteCart(id){
        const toDelete = await CartDao.deleteOne({_id: id})
        return toDelete
    }

}