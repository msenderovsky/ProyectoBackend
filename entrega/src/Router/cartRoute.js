const express = require('express')
const cartRoute = express.Router()

const Products= require ('../api/products')
const storeProducts = new Products()

const Carts= require('./api/cart')
const storeCarts= Carts()

cartRoute.get('/:id/products', async (req, res) => {
    try {
        const productsInCartById = await storeCarts.listCartProducts(req.params.id)
        res.json(productsInCartById)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
})

cartRoute.post('/', async (req,res)=> {
    try {
        const newCart = await storeCarts.createCart() 
        res.json(newCart)
    }catch (error) {
        res.status(500).json({error: error.message})
    }
})

cartRoute.post('/:id/products', async (req,res)=> {
    try{
        const product= await storeProducts.getProduct(req.body.id)
        const addProduct = await storeCarts.addCartProduct(req.params.id, product)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

cartRoute.delete('/:id', (req,res)=> {
    try{
        const deletedCart= await storeCarts.deleteCart(req.params.id)
        res.status(200).json(deletedCart)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

cartRoute.delete('/:idcart/products/:idprod', (req,res)=> {
    try{
        const deletedProduct= await storeCarts.deleteCartProduct(req.params.idcart, req.params.idprod)
        res.status(200).json(deletedProduct)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})
 
modules.exports = cartRoute
