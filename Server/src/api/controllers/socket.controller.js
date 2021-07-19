
const express = require('express');
const https=require('https');
const path=require('path');
const fs=require('fs');
const app = express();
const {
  socketPort
} = require('./../../config/vars');

const User = require('./../models/user.model');
const editor = require('./editor.controller');
const logger = require('../../config/logger')




const cert = fs.readFileSync(path.join(__dirname + '../../../ssl/www_socialsgonewild_com.crt'));
const ca = fs.readFileSync(path.join(__dirname + '../../../ssl/www_socialsgonewild_com.ca-bundle'))
const key = fs.readFileSync(path.join(__dirname + '../../../ssl/e99214a997d7eaaa9a8dbf852656cd4c.key'));


let options = {
	cert: cert,
	ca: ca,
	key: key
};

const httpsServer = https.createServer(options,app)
const server =httpsServer.listen(socketPort, '0.0.0.0');

const socketIo = require('socket.io');
const io = socketIo(server,
  {
    cors: {
      origin: '*',
    }
  }
);

logger.info("Start socket server: " + socketPort)


let interval;

io.on("connection", (socket) => {
  console.log("New client connected: " + socket.id);
  if (interval) {
    clearInterval(interval);
  }

  //when progress bar starts, socket send the editing status constantly.

  socket.on('start', (data) => {
    console.log(data);
    interval = setInterval(() => getApiAndEmit(socket), 1000);
  })
  socket.on("disconnect", () => {
    editor.progressStatus=1;
    console.log("Client disconnected: " + socket.id);
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  // Emitting a new message. Will be consumed by the client
  socket.emit("progressStatus", editor.progressStatus?editor.progressStatus:1);
};
