const FirebaseContainer = require('../../contenedor/FirebaseContainer')

class DAOCart extends FirebaseContainer{
    constructor(){
        super()
    }

    async addCart(data){
        const cart = await super.save(data, 'carts')
        return cart
    }

    async listCarts(){
        const carts = await super.list('carts')
        return carts
    }

    async deleteCart(id){
        const cart = await super.delete('carts', id)
        return cart
    }

    async deleteCartProduct(cartID, productID){
        const cart= await super.showElement('carts', cartID)
        cart.products = cart.products.filter(prod=> prod!= productID)
        await super.update('carts', cart, cartID)
        return cart
    }

    async addCartProduct(productID, cartID){
        const cart= await super.showElement('carts', cartID)
        cart.products.push(productID)
        await super.update('carts', cart, cartID)
        return cart
    }

}

module.exports = new DAOCart()