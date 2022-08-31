const MongoDBContainer = require('../container/MongoDBContainer')
const myLoggerError= require ('../service/logger.js')
const Product = require('../models/products')

class DAOProducts extends MongoDBContainer{
    constructor(){
        super()
    }

    async saveProduct(data) {
        try{
            const product1 = new Product({
                title: data.title,
                price: data.price,
                description: data.description,
                category: data.category
            })
            const addedProduct = await super.save(product1) 
            return addedProduct
        }catch(error){
            myLoggerError.error("Error in saveProduct " + error)
        }
    }

    async listProducts(){
        try{
            const products = await super.list(Product)
            return products
        }catch(error){
            myLoggerError.error("Error in listProducts " + error)
        }
    }
    
    async showProduct(id){
        try{
            const product = await super.showElemento(Product, id)
            return product
        }catch(error){
            myLoggerError.error("Error: el producto no existe " + error)
        }
    }
    
    async updateProduct(data, id){
        try{
            const product = await super.showElement(Product, id)
            product.title = data.title
            product.price = data.price
            product.url = data.url
            await super.update(product)
            return product
        }catch(error){
            myLoggerError.error("Error in updateProduct " + error)
        }
    }

    async deleteProduct(id){
            try{
            const toDelete = await super.delete(Product, id)
            return toDelete
        }catch(error){
            myLoggerError.error("Error in deleteProduct " + error)
        }
    }
}

module.exports = new DAOProducts()