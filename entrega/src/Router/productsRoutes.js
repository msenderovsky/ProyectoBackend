const Products= require ('../api/products')
const { Router } = require('express')
const isAdmin= require('../middleware/isAdmin')

const productsRoutes = Router()
const storeProducts = new Products()

const rolAdmin=true

productsRoutes.get('/', isAdmin(rolAdmin), async (req,res)=>{
    const products= storeProducts.getProducts()
    res.status(200).json(products)
})

productsRoutes.get('/:id', isAdmin(rolAdmin), async (req,res)=>{
    const product= storeProducts.getProduct(req.params.id)
    if (product){
        res.status(200).json(product)
    }
        else{
            res.status(404).json({error: 'Producto no encontrado'})
        }
})

productsRoutes.post('/', isAdmin(rolAdmin), async (req,res)=>{
    if(req.body.title && req.body.price){
        const product= storeProducts.save(req.body)
        res.status(201).send(product)
    } else{
        res.send('Cargá los productos')
    }
})

productsRoutes.delete('/:id', async (req,res)=>{
    try{
        const id= Number(req.params.id)
        storeProducts.deleteByID(id)
        req.status(200).json('Producto borrado')
    }catch(e){
        res.status(500).json({error:'No se puede borrar ese producto'})
    }
})

productsRoutes.put('/:id', isAdmin(rolAdmin), async (req,res)=>{
    try{
        const id= Number(req.params.id)
        storeProducts.update(id, req.body)
        res.status(200).json("Producto actualizado")
    }catch(e){
        res.status("No se pudo editar el producto")
    }
})

module.exports = productsRoutes