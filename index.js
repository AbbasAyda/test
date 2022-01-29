const http = require("http");
const express = require('express');
const app = express();	
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
console.log(`Server listening on ${PORT}`);
  }); 
