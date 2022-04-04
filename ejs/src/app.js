const express = require("express")
const { json } = reqire ('express')
const routes = require ('./Router/routes')
const routeProducts = require ('./Router/productos')

const server= express()

server.use(json())

server.use('/', routes)
server.use('/api/productos', routeProducts)

module.exports = server