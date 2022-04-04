const express = require('express')
const cartRoute = express.Router()
const admin= Boolean(true)
const Productos= require('./api/products')

const products= Productos()

cartRoute.get('/', (req,res)=> {
   
    res.status(200).json({
        data : 'data',
        status: '200'
    })
})

cartRoute.get('/', (req,res)=> {
    res.status(200).json({
        data : 'data',
        status: '200'
    })
})

cartRoute.post('/', isAdmin(admin), (req,res)=> {
    const newProduct= await products.saveProduct(req.body) 
    res.status(200).json(newProduct)
})

cartRoute.put('/', isAdmin(admin), (req,res)=> {
    try{
        const updatedProduct= await products.updateProduct(req.params.id, req.body)
        res.status(200).json(updatedProduct)
    }catch(error){
        res.status(200).json({error: error.message})
    }
})

cartRoute.delete('/', isAdmin(admin), (req,res)=> {
    try{
        const deletedCart= await products.deleteCart()
        res.status(200).json(deletedCart)
    }catch(error){
        res.status(200).json({error: error.message})
    }
})

cartRoute.delete('/:idcart/products/:idprod', isAdmin(admin), (req,res)=> {
    try{
        const deletedProduct= await products.deleteProductInCart(req.params.idcart, req.params.idprod)
        res.status(200).json(deletedProduct)
    }catch(error){
        res.status(200).json({error: error.message})
    }
})
 
modules.exports = cartRoute
