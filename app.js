//Proyecto API REST con nodejs y mongodb
//Desarrollada por juan jose herrera saldaña

var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');
var mongoose = require('mongoose');

//Import other js
var database = require('./mongodb/db.js');
var routes = require('./routes/routes.js');
var router = express.Router();



function iniciar() {

database.mongodb(mongoose);


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use('/api', router);

routes.routes(router);

// Start server --
app.listen(3000, function () {
  console.log('Node server running on http://localhost:3000');
});
}



exports.iniciar = iniciar;
