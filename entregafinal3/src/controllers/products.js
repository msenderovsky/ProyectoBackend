import productService from "../service/productService";
const  { logger, myLoggerWarn, myLoggerError } = require ('../service/logger.js')

class productController{ 
    
    async listProducts(req,res) {
        try {
            const products = await productService.listProducts()
            res.send(products)
        } catch (error) {
            myLoggerError.error("Error in listProducts " + error)
        }
            
    }
    async saveProducts(req,res){
        try {
            const product = req.body
            const newProduct = await productService.saveProduct(product)
            res.send(newProduct).status(201)
        } catch (error) {
            if(!product){
                myLoggerError.error("Error in saveProducts " + error)
            }
            res.send(error)
        }
    }
    async getOneProduct(req,res){
        try {
            const productID = req.params.productID;
            const findProduct = await productService.findByiD(productID)
            res.send(findProduct)
        } catch (error) {
            myLoggerError.error("Error in getProduct " + error)
        }
    }
    async deleteProduct(req,res){
        try {
            const productID = req.params.productID;
            const toDelete = await productService.deleteProduct(productID)
            res.status(201).send(toDelete)
        } catch (error) {
            myLoggerError.error("Error in deleteProduct " + error)
        }
    }
    async updateProduct(req,res){
        try {
            const productID = req.params.productID;
            const body = req.body
            const toUpdate = await productService.updateProduct(productID, body)
            res.send(toUpdate)
            
        } catch (error) {
            myLoggerError.error("Error in updateProduct " + error)
        }
    }

    async findCategory(req,res){
        try {
            const category = req.params.categoria
            const toFind = await productService.findCategory(category)
            res.send(toFind)
        } catch (error) {
            myLoggerError.error("Error in findCategory " + error)
        }
    }

    async deleteProducts(req,res){
        try {
            const toDelete = await productService.deleteProducts()
            res.status(201).send(toDelete)
        } catch (error) {
            myLoggerError.error("Error in deleteProducts " + error)
        }
    }
}

module.exports = new productController()