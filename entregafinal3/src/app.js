const express = require('express')
const app = express()
const ejs = require('ejs')

const productsRoutes = require('./routers/products')
const cartsRoutes = require('./routers/carts')
const routesAuth = require('./routers/auth')
const routeStart = require('./routers/auth')

console.log(process.env.ENVIRONMENT)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/products', productsRoutes)
app.use('/carts', cartsRoutes)
app.use('/auth', routesAuth )
app.use('/', routeStart)




module.exports = app