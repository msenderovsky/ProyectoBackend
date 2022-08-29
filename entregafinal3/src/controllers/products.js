require('dotenv').config()
const DAOProducts = require('../daos/DAOProducts')


class productsController{

    async saveProduct(req, res) {
        const addedProduct = await DAOProducts.saveProduct(req.body)
        res.send(addedProduct)
    }

    async showProducts(req, res){
        const products = await DAOProducts.listProducts()
        console.log(req.user)
        res.render('products', products)
    }
    
    async showProduct(req, res){
        const product = await DAOProducts.showProduct(req.params.id)
        res.send(product)
    }
    
    async updateProduct(req, res){
        const product = await DAOProducts.updateProduct(req.body, req.params.id)
        res.send(product)
    }

    async deleteProduct(req, res){
        const product = await DAOProducts.deleteProduct(req.params.id)
        res.send(product)
    }
}

module.exports = new productsController()