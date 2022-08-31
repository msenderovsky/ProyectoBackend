import mongoose from 'mongoose';
import app from './src/app.js';
import express from 'express';
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";
import messageService from './src/service/messageService.js';
import 'dotenv/config';
//require('dotenv').config()

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
        messageService.saveMessage(msg);
  
      //Actualización de la vista de mensajes
      //io.sockets.emit("messages", await apiMessages.listAll());
    });
});

httpServer.listen(PORT, () => console.log(`http://localhost:${PORT}`))
