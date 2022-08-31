import DAOCart from '../daos/DAOCarts'
import DAOProducts from '../daos/DAOProducts'

module.exports = class cartService{

    async showCarts(){
        const cart = await DAOCart.getCarts()
        return cart
    }

    async showCart(id){
        const cart = await DAOCart.showCart(id)
        return cart 
    }
    
    async addCart(){
        const addedCart = await DAOCart.addCart()
        return addedCart
    }  
    
    async addCartProduct(idCart, idProduct, cant){
        const cart = await DAOCart.addCartProduct(idCart, idProduct, cant)
        return cart
    }

    
    async deleteCartProduct(cartID, productID){
        const product = await DAOProducts.findById(productID)
        const cart = await DAOCart.deleteCartProduct(cartID, product)
        return cart
    }

    async updateCartProduct(cartID, productID, cant){
        const updProduct = await DAOCart.updateProduct(cartID, productID, cant)
        return updProduct
    }

   async deleteCart(id){
        const cart = await DAOCart.deleteCartById(id)
        return cart
    }
}