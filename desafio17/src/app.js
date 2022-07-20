const express = require('express')
const app = express()
const ejs = require('ejs')

const productsRoutes = require('./routers/products')
const cartsRoutes = require('./routers/carts')
const routesAuth = require('./routers/auth.router')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products', productsRoutes)
app.use('/api/carts', cartsRoutes)
app.use('/auth', routesAuth )




module.exports = app