const mongoose = require('mongoose');
const app = require('./src/app')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const sendMail = require('./src/config/nodemailer');
const session = require('express-session')
const Container = require("./src/contenedor");
const { optionsSQLite } = require("./src/DB/optionsSQLite");

require('dotenv').config()

const PORT = process.env.PORT
const urlBase = process.env.DB
const tableMessages = "messages";
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const apiMessages = new Container(optionsSQLite, tableMessages);

mongoose.connect(urlBase)

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

/* WEBSOCKET */
io.on("connection", async (socket) => {
    console.log(`Nuevo cliente conectado ${socket.id}`);
  
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

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
