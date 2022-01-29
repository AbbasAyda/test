const http = require("http");
const express = require('express');
const socketio=require('socket.io')
const app = express();
const server = new http.Server(app);
const io = socketio(server);
io.path('/route');
const mongodb      = require('mongodb');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000';
app.set("port",PORT);
app.listen(PORT,()=>{
  console.log(`Server listening on ${PORT}`);
    });
