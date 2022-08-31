import DAOCart from '../daos/DAOCarts.js'
import DAOProducts from '../daos/DAOProducts.js'

 class cartService{

    async showCartProducts(){
        const cart = await DAOCart.showCartProducts()
        return cart
    }

    async showCarts(){
        const carts = await DAOCart.showCarts()
        return carts
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
        const cart = await DAOCart.deleteCart(id)
        return cart
    }
}

export default cartService