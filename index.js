const http = require("http");
const express = require('express');
const app = express();	
const mysql      = require('mysql');
var bodyParser = require('body-parser');
const PORT = process.env.PORT | 6565;
app.listen(PORT,()=>{
console.log(`Server listening on ${PORT}`);
  }); 
