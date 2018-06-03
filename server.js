const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
import cors from 'cors';

// const initRoutes = require('./server/routes');
import initRoutes from './server/routes';

const app = express();
const port = 3000;

// Middlewares
//app.use(express.static('app')); // -> this will convert all your paths to something like C:\Users\Ajay\Desktop\expressJs\app\index.html, which becomes absolute path.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//accessing index.html
//app.get('/',function(req,res){
  //res.sendFile('C:/Users/Ajay/Desktop/webypacky/src/index.html');
//})

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/logindb");

// Routes Initialization
initRoutes(app);

// Start server
app.listen(port, () => {
 console.log("Server listening on port " + port);
});
