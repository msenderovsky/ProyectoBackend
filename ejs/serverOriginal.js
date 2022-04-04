const express = require("express")
const {Server:HttpServer} = require ('http')
const {Server:IOServer} = require ('socket.io')
const app = express()
const httpServer= new HttpServer(app)
const io = new IOServer(httpServer)
const myRoutes = require ('./src/Router/routes')
const products= require('./api/contenedor')
const ChatHistory= require('./api/chatHistory')
const storeProducts = new products()
const history = new ChatHistory()

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(myRoutes)

app.set('view engine', 'ejs')
app.set('views','./public/views')

const messages=[]

io.on('connection', async (socket) => {
    console.log('Un cliente se ha conectado')

    //productos

    //emit para enviar
    const p = await storeProducts.getAll()
    socket.emit('products',p)

    //on para escuchar
    socket.on('GuardarNuevoProducto', (newProduct)=>{
        storeProducts.save(newProduct)
        io.sockets.emit('products', storeProducts.getAll())
    })

    //historial de mensajes
    const messages = await history.loadMessage()
    socket.emit('messages', messages)

    socket.on('NuevoMensaje', async (newMessage)=>{
        await history.saveMessage(newMessage)
        const message2 = await history.loadMessage()
        io.sockets.emit("messages", message2)
    })
})



//server
const PORT = 8080
httpServer.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))