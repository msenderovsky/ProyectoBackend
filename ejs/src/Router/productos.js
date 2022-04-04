const Products= require ('../../api/contenedor')
const { Router } = require('express')

const productsRoute = Router()
const storeProducts = new Products()

productsRoute.get('/', (req,res)=>{
    const productos= storeProducts.getAll()
    res.json(productos)
})

productsRoute.get('/:id', (req,res)=>{
    const producto= storeProducts.getById(req.params.id)
    res.json(producto)
})

productsRoute.post('/', (req,res)=>{
    if(req.body.title && req.body.price){
        const producto= storeProducts.save(req.body)
        res.send(producto)
    } else{
        res.send('Cargá los productos')
    }
})

productsRoute.delete('/:id', (req,res)=>{
    try{
        const id= Number(req.params.id)
        storeProducts.deleteByID(id)
        req.status(200).json('Producto borrado')
    }catch(e){
        res.status(500).json({error:'No se puede borrar ese producto'})
    }
})

productsRoute.put('/:id', (req,res)=>{
    try{
        const id= Number(req.params.id)
        storeProducts.update(id, req.body)
        res.status(200).json("Producto actualizado")
    }catch(e){
        res.status("No se pudo editar el producto")
    }
})
