const express = require('express')
const app = express()
const ejs = require('ejs')

const productsRoutes = require('./routers/products')
const cartsRoutes = require('./routers/carts')
const authRoutes = require('./routers/auth')
const orderRoutes = require('./routers/auth')
const messageRoutes = require('./routers/messages')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/productos', productsRoutes)
app.use('/carrito', cartsRoutes)
app.use('/auth', authRoutes)
app.use('/chat', messageRoutes)
app.use('/orders', orderRoutes)

module.exports = app