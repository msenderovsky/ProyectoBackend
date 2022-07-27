require('dotenv').config()
const DAOProducts = require('../daos/'+process.env.ENVIRONMENT+'/DAOProducts')
let instance= null

class FBaseProducts{
    constructor(){
        this.DAOProducts= require('../daos/firebase/DAOProducts')
    }
}

class FSProducts{
    constructor(){
        this.DAOProducts= require('../daos/fs/DAOProducts')
    }
}

class MongoProducts{
    constructor(){
        this.DAOProducts= require('../daos/mongo/DAOProducts')
    }
}

class ProductFactory{
    create(DAOProducts){
        switch(DAOProducts){
            case "firebase":
                return new FBaseProducts()
            case "fs":
                return new FSProducts()
            case "mongo":
                return new MongoProducts()
        }
    }
}

const prods= new ProductFactory()

class productsController{

    static getInstance(){
        if (!instance){
            instance= new productsController()
        }
        return instance
    }

    async saveProduct(req, res) {
        const addedProduct = await prods.saveProduct(req.body)
        res.send(addedProduct)
    }

    async showProducts(req, res){
        const products = await prods.listProducts()
        res.send(products)
    }
    
    async showProduct(req, res){
        const product = await prods.showProduct(req.params.id)
        res.send(product)
    }
    
    async updateProduct(req, res){
        const product = await prods.updateProduct(req.body, req.params.id)
        res.send(product)
    }

    async deleteProduct(req, res){
        const product = await prods.deleteProduct(req.params.id)
        res.send(product)
    }
}

module.exports = new productsController()