const express = require('express')
const app = express()
const bodyparser = require('body-parser');
const ejs = require('ejs')

const productsRoutes = require('./routers/products')
const cartsRoutes = require('./routers/carts')
const routesAuth = require('./routers/auth')

console.log(process.env.ENVIRONMENT)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/productos', productsRoutes)
app.use('/carrito', cartsRoutes)
app.use('/', routesAuth)




module.exports = app