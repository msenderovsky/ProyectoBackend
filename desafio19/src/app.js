const express = require('express')
const app = express()
const ejs = require('ejs')

const productsRoutes = require('./routers/products')
const cartsRoutes = require('./routers/carts')
const routesAuth = require('./routers/auth')
const graphqlHTTP= require ('express-graphql')
const schema= require ('./models/products.js')

import {
    getProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
} from "./service/functions.js"

app.use("/graphql", graphqlHTTP({
    schema:schema,
    rootValue:{
        getProducts, 
        getProduct, 
        createProduct, 
        updateProduct, 
        deleteProduct
    },
    graphiql: true,
}))


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/products', productsRoutes)
app.use('/api/carts', cartsRoutes)
app.use('/auth', routesAuth )


module.exports = app