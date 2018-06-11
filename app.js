/**
* Jamie Sweeney
* June 2018
* app.js - Provides the backend web application logic.
**/


// Load our required modules
var express = require('express');
var app = express();


// Configure serving of web application files and node modules
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

// Start the app
app.listen(8080) ;
