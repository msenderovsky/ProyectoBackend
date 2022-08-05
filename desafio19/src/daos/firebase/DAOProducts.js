const FirebaseContainer = require('../../container/FirebaseContainer')
const myLoggerError= require ('../../utils/logger.js')
//import {myLoggerError } from '../../utils/logger.js'

class DAOProducts extends FirebaseContainer{
    constructor(){
        super()
    }

    async saveProduct(data){
        try{
            const product = await super.save(data, 'products')
            return product
        }catch(error){
            myLoggerError.error("Error in saveProducts " + error)
        }
    }    

    async listProducts(){
        try{
            let docs = await super.list('products')
            const res = docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                price: doc.data().price,
                url: doc.data().url,
            }))
            return res
        }catch(error){
            myLoggerError.error("Error in listProducts " + error)
        }
    }

    async showProduct(id){
        try{
            const product = await super.showElement('products', id)
            return product
        }catch(error){
            myLoggerError.error("Error in showProducts " + error)
        }
    }

    async updateProduct(data, id){
        try{
            const product = await super.update('products', data, id)
            return product
        }catch(error){
            myLoggerError.error("Error in updateProduct " + error)
        }
    }

    async deleteProduct(id){
        try{
            const product = await super.delete('products', id)
            return product
        }catch(error){
            myLoggerError.error("Error in deleteProduct " + error)
        }
    }

}

module.exports = new DAOProducts()