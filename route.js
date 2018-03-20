'use strict';

var authJwtController=require('./auth_jwt');


module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/tasks')
        .get(authJwtController.isAuthenticated,function(req,res) {
            todoList.list_all_tasks;
        })
         .post(authJwtController.isAuthenticated, function(req,res){
             todoList.create_a_task
    });


    app.route('/tasks/:taskId')
        .get(authJwtController.isAuthenticated,function(req,res){
            todoList.read_a_task
        })
        .put(authJwtController.isAuthenticated, function(req,res){
            todoList.update_a_task
        })
        .delete(authJwtController.isAuthenticated, function(req,res){
            todoList.delete_a_task
        });

};