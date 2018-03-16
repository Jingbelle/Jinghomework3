var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Movie = require('./api/modules/moviemo'),
    User = require('./api/modules/module'),

    //created model loading here
    bodyParser = require('body-parser');
var passport=require('passport');
var jwt = require("jsonwebtoken");
var auth=require('./api/route/auth_jwt');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admintest:admintest@ds163418.mlab.com:63418/webdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());




var routes = require('./api/route/route'); //importing route
routes(app); //register the route
var rou = require('./api/route/route2'); //importing route
rou(app); //register the route



app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
