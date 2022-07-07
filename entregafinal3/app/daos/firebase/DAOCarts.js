const FirebaseContainer = require('../../container/FirebaseContainer')

class DAOCarts extends FirebaseContainer{
    constructor(){
        super()
    }

    async addCart(){
        const data = {
            fecha: Date().toString()
        }
        const cart = await this.dbf.collection('carts').add(data)
        return cart
    }

    async addCarts(){
        let docs = await super.list('carts')
        const res = docs.map(doc => ({
            id: doc.id,
            date: doc.data().date,
            products: doc.data().products
        }))
        return res
    }

    async addCartProduct(productID, cartID){
        const product = await super.showElement('products', productID)
        //const messageRef = db.collection('rooms').doc('roomA').collection('messages').doc('message1');
        const cart = await this.dbf.collection('carts').doc(cartID).collection('products').doc(productID).set(product)
        return cart
    }

    async deleteCartProduct(cartID, productID){
        const cart = await this.dbf.collection('carts').doc(cartID).collection('products').doc(productID).delete()
        return cart
    }


    async deleteCart(id){
        const cart = await super.delete('carts', id)
        return cart
    }

}

module.exports = new DAOCarts()