//const Product = require ("../models/products")
import Product from "../models/products.js"

class DAOProducts {
    
    async showProducts(){
        const prodList = await Product.find()
        return prodList
    }

    async saveProduct(product) {
        const newProduct = await Product.create(product)
        return newProduct
    }

    async findByID(productID) {
        const toFind = await Product.findById(productID)
        return toFind
    }

    async deleteProduct(productID){
        const toDelete = await Product.findByIdAndDelete(productID)
        return toDelete
    }

    async updateProduct(productID, body){
        const updProduct = await Product.findByIdAndUpdate(productID,body)
        return updProduct
    }

    async findCategory(category){
        const categoryFind = await Product.find({category:category})
        return categoryFind
    }

    async updateProduct(productID, cant){
        const updProduct = await Product.findByIdAndUpdate({_id: productID},{$set:{cant:cant}})
        return updProduct
    }
    async deleteAllProducts(){
        const toDelete = await Product.deleteMany({})
        return toDelete
    }
}

export default DAOProducts