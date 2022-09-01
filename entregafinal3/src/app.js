import express, { json, urlencoded } from 'express'
const app = express()
import ejs from 'ejs'

import productsRoutes from './routers/products.js'
import messageRoutes from './routers/messages.js'
import cartsRoutes from './routers/carts.js'
import orderRoutes from './routers/orders.js'
import authRoutes from './routers/auth.js'
import userRoutes from './routers/users.js'
import cookieParser from "cookie-parser";
/*
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')*/

app.use(json())
app.use(cookieParser())
app.use(urlencoded({extended:true}))

app.use('/productos', productsRoutes)
app.use('/carrito', cartsRoutes)
app.use('/chat', messageRoutes)
app.use('/orders', orderRoutes)
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

export default app