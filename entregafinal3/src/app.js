import express, { json, urlencoded } from 'express'
const app = express()
import ejs from 'ejs'

import productsRoutes from './routers/products.js'
import messageRoutes from './routers/messages.js'
import cartsRoutes from './routers/carts.js'
import orderRoutes from './routers/auth.js'
import authRoutes from './routers/auth.js'
/*
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')*/

app.use(json())
app.use(urlencoded({extended:true}))

app.use('/productos', productsRoutes)
app.use('/carrito', cartsRoutes)
app.use('/chat', messageRoutes)
app.use('/orders', orderRoutes)
app.use('/auth', authRoutes)

export default app