const Contenedor= require('./contenedor')
const express= require('express')
const app= express()
const PORT=8080
const storedProducts = new Contenedor("productos.txt");

const server= app.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error=>console.log(`Error en el servidor${error}`))

app.get('/productos', async (req, res)=>{
    const prod=await storedProducts.getAll()
    res.send(prod)
})

app.get('/productoRandom', async (req, res)=>{
    const prod= await storedProducts.getAll()
    const maximo = prod.length
    const randomID = Math.floor(Math.random()*(maximo)+1)
    console.log(randomID)
    res.send(prod[randomID-1])
})

