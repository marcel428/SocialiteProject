
const express = require('express');
const app = express();
const {
  socketPort
} = require('./../../config/vars');
const server = app.listen(socketPort);
const socketIo = require('socket.io');
const io = socketIo.listen(server);
const User = require('./../models/user.model');
const editor = require('./editor.controller');
const logger = require('../../config/logger')


logger.info("Start socket server: " + socketPort)



let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};
