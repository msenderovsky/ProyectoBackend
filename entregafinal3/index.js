const mongoose = require('mongoose');
const app = require('./src/app')
const express = require('express')
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
require('dotenv').config()
const messageController = require ('../service/messageController')

require('dotenv').config()

const PORT = process.env.PORT
const urlBase = process.env.DB
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

mongoose.connect(urlBase)

/* WEBSOCKET */
io.on("connection", async (socket) => {
    console.log(`Cliente conectado ${socket.id}`);
  
    //------- Enviar histórico de mensajes
    socket.emit("messages", "mensaje inicial");
  
    //------- Escuchar nuevos mensajes
    socket.on("newMessage", async (msg) => {
        messageController.saveMessage(msg);
  
      //Actualización de la vista de mensajes
      //io.sockets.emit("messages", await apiMessages.listAll());
    });
});

httpServer.listen(PORT, () => console.log(`http://localhost:${PORT}`))
