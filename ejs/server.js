const express = require("express")
const server= require('./src/app')

const app = express()

const PORT = 8080

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))