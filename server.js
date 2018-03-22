
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),

    User = require('./moviemodule'),
    users=require('./usermodule');
require('./userct.js');
//created model loading here

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admintest:admintest@ds163418.mlab.com:63418/webdb');
var http = require('http');
var bodyParser = require('body-parser');
var passport = require('passport');

var authJwtController = require('./auth_jwt');

var jwt = require('jsonwebtoken');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
var rou=require('./userou.js');
rou(app);
var router = express.Router();

var con=require('./moviect.js');

router.route('/movies')
    .post(authJwtController.isAuthenticated,function (req, res) {
        con.list_all_tasks(req,res);

    });
router.route('/movies')
    .post(authJwtController.isAuthenticated,function (req, res) {
        con.create_a_task(req,res);

    });
router.route('/movies/:taskId')
    .post(authJwtController.isAuthenticated,function (req, res) {
        con.read_a_task(req,res);

    });
router.route('/movies')
    .post(authJwtController.isAuthenticated,function (req, res) {
        con.update_a_task(req,res);

    });
router.route('/movies')
    .post(authJwtController.isAuthenticated,function (req, res) {
        con.delete_a_task(req,res);

    });


app.use('/', router);


app.listen(process.env.PORT || 4000);

console.log('todo list RESTful API server started on: ' +'4000' );

