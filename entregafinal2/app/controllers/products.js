const Product = require('../models/products')

class ProductsController{
    async saveProduct(req,res){
        const {title, price, url}=req.body
        const product1=new Product({
            title,
            price,
            url,
            date: Date().toString()
        })
        const addedProduct= await product1.save()
        res.send(addedProduct)
    }

    async showProducts(req,res){
        const products = await Product.find()
        res.send(products)
    }

    async showProduct(req,res){
        const product = await Product.findOne({_id: req.params.id})
        res.send(product)
    }

    async updateProduct(req,res){
        const {title, price, url}=req.body
        const product = await Product.findByIdAndUpdate({_id: req.params.id}, req.body)
        product.title= title
        product.price= price
        product.url= url
        await product.save()
        res.send(product)
    }

    async deleteProduct(req,res){
        try{
            const id= req.params.id
            const toDelete = await Product.deleteOne({_id: id})
            res.send(toDelete)
        }catch(error){
            console.log(`Error borrando por id: ${error.message}`)
        }
    }
}

module.exports = new ProductsController()