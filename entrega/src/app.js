const express = require("express")
const cartRoutes = require ('./Router/cartRoutes')
const productsRoutes = require ('./Router/productsRoutes')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('./api/cart', cartRoutes)
app.use('./api/products', productsRoutes) 

app.all('*', (req, res) => {
    res.status(404).json({
        error: -2 , 
        descripcion: `Ruta: ${req.originalUrl} Metodo ${req.method} NO IMPLEMENTADO`
    })
})

module.exports = app