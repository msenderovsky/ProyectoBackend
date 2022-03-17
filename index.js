const express= require('express')
const Products= require ('./Contenedor')
const app=express()
const productsRoute= express.Router()
const PORT=8080

app.use (express.json())
app.puse(express.urlencoded({extended:true}))
app.use('/static', express.static(__dirname + '/public'))
app.use('/api/productos', productsRoute)
const storeProducts=new Products()


productsRoute.get('/', async (req,res)=>{
    const productos= await storeProducts.getAll()
    res.json(productos)
})

productsRoute.post('/:id', async (req,res)=>{
    if(req.body.title &&req.body.price){
        const producto= await storeProducts.save(req.body)
        res.send(producto)
    } else{
        res.send('Cargá los productos')
    }
})

productsRoute.delete('/:id', async (req,res)=>{
    try{
        await storeProducts.deleteByID(req.params.id)
        req.status(200).json('Producto borrado')
    }catch(e){
        res.status(500).json({error:'No se puede borrar ese producto'})
    }
})

productsRoute.put('/:id', async (req,res)=>{
    try{
        const id= Number(req.params.id)
        storeProducts.update(id, req.body)
        res.status(200).json("Producto actualizado")
    }catch(e){
        res.status("No se pudo editar el producto")
    }
})

const server= app.listen (PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error=>console.log(`Error en el servidor${error}`))