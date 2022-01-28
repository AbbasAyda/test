var http = require("http");
var express = require('express');
var app = express();	
var mysql      = require('mysql');
var bodyParser = require('body-parser');
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(8080); 
