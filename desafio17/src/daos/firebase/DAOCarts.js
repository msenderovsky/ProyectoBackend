const FirebaseContainer = require('../../container/FirebaseContainer')
import {myLoggerError } from '../../utils/logger.js'

class DAOCarts extends FirebaseContainer{
    constructor(){
        super()
    }

    async addCart(){
        try{
            const data = {
                fecha: Date().toString()
            }
            const cart = await this.dbf.collection('carts').add(data)
            return cart
        }catch(error){
            myLoggerError.error("Error in addCart " + error)
        }
    }

    async addCarts(){
        try{
            let docs = await super.list('carts')
            const res = docs.map(doc => ({
                id: doc.id,
                date: doc.data().date,
                products: doc.data().products
            }))
            return res
        }catch(error){
            myLoggerError.error("Error in addCarts " + error)
        }
    }

    async addCartProduct(productID, cartID){
        try{
            const product = await super.showElement('products', productID)
            const cart = await this.dbf.collection('carts').doc(cartID).collection('products').doc(productID).set(product)
            return cart
        }catch(error){
            myLoggerError.error("Error in addCartProduct " + error)
        }
    }

    async deleteCartProduct(cartID, productID){
        try{
            const cart = await this.dbf.collection('carts').doc(cartID).collection('products').doc(productID).delete()
            return cart
        }catch(error){
            myLoggerError.error("Error in deleteCartProduct " + error)
        }
    }


    async deleteCart(id){
        try{
            const cart = await super.delete('carts', id)
            return cart
        }catch(error){
            myLoggerError.error("Error in deleteCart " + error)
        }
    }
}

module.exports = new DAOCarts()