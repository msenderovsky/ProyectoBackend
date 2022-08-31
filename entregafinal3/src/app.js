const express = require('express')
const app = express()
const ejs = require('ejs')

const productsRoutes = require('./routers/products')
const messageRoutes = require('./routers/messages')
const cartsRoutes = require('./routers/carts')
const orderRoutes = require('./routers/auth')
const authRoutes = require('./routers/auth')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use( express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/productos', productsRoutes)
app.use('/carrito', cartsRoutes)
app.use('/chat', messageRoutes)
app.use('/orders', orderRoutes)
app.use('/auth', authRoutes)

module.exports = app