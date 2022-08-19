const mongoose = require('mongoose');
const app = require('./src/app')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const sendMail = require('./src/config/nodemailer');
const sendSMS = require('./src/config/twilioSms');
const session = require('express-session')
const Container = require("./src/contenedor");
const { optionsSQLite } = require("./src/DB/optionsSQLite");

require('dotenv').config()

const PORT = process.env.PORT
const urlBase = process.env.DB
const tableProducts = "products";
const tableMessages = "messages";
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const apiMessages = new Container(optionsSQLite, tableMessages);
const apiProducts = new Container(optionsSQLite, tableProducts);

if (process.env.ENVIRONMENT == 'mongo') mongoose.connect(urlBase)

app.use(session({
    secret: 'keyboard cat',
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: Number(process.env.TIME_SESSION_SECONDS)
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

io.on("connection", async (socket) => {
    console.log(`Nuevo cliente conectado ${socket.id}`);
    //------- Enviar histórico de productos
    socket.emit("products", await apiProducts.listAll());
  
    //------- Escuchar nuevos productos
    socket.on("newProduct", async (product) => {
      await apiProducts.save(product);
      //Actualización de la vista de productos
      io.sockets.emit("products", await apiProducts.listAll());
    });
  
    //------- Enviar histórico de mensajes
    socket.emit("messages", await apiMessages.listAll());
  
    //------- Escuchar nuevos mensajes
    socket.on("newMessage", async (msg) => {
      msg.date = new Date().toLocaleString();
      await apiMessages.save(msg);
  
      //Actualización de la vista de mensajes
      io.sockets.emit("messages", await apiMessages.listAll());
    });
});


//sendMail()
//sendSMS()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
