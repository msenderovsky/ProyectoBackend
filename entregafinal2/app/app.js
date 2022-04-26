const express= require ('express')
const app=express()
const productsRoute = require('./routers/productsRoute')
const cartsRoute = require('./routers/cartsRoute')

app.use(express.json())
app.use('./api/productos', productsRoute)
app.use('./api/carritos', cartsRoute)

module.exports= app 