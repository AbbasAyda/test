const http = require("http");
const server = new http.Server(app);
const io = socketio(server);
io.path('/route');
const express = require('express');
const mongodb      = require('mongodb');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000';
const app = express();	
app.set("port",PORT);
app.listen(PORT,()=>{
  console.log(`Server listening on ${PORT}`);
    });
    const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);
