var express = require('express');
// Path is a system module that will help us work with file system paths.
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Configure the variables from the '.env' file using dotenv.
dotenv.config();

// Import our route files.
var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var products = require('./routes/products');
var orders = require('./routes/orders');

// Set up mongoose variables.
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
// Connect to DB.
mongoose.connect(
    process.env.DB_CONNECT,
    ()=>console.log('Connected to DB')
);

// The main app variable.
var app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, '/client/dist/nebular-app')));
// Middlewear to send post requests and parse their body.
app.use(express.json());

// Enabling CORS for Development Mode.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
}); 

// Standard Body Parser MiddleWear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/************** Routes ***************/
// Load the application on the Root Route.
app.use('/', index);
// Load the Authentication API routes.
app.use('/api/auth/', auth);
// Load the Users API routes.
app.use('/api/users/', users);

// app.use('/api/products', products);
// app.use('/api/orders', orders);

const port = process.env.PORT || 8080;
// Listen on port 3000.
app.listen(port, function(){
    console.log('Server started on port '+port);
});