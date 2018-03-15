
var mongoose = require('mongoose'),
    Task = mongoose.model('Movie');

exports.list_all_tasks = function(req, res) {

    Task.find({}, function (err, task) {
        if (err)
            res.status(202).send(err);
        else
        res.json(task);
    });
};
    exports.create_a_task = function(req, res) {
        var new_task = new Task(req.body);
        new_task.save(function(err, task) {
            if (err)
                res.status(202).send(err);
            res.json('create successfully + '+task);
        });
    };
    exports.read_a_task = function(req, res) {
        Task.findById(req.params.taskId, function(err, task) {
            if (err)
                res.status(200).send(err);
            res.json(task);
        });
    };


    exports.update_a_task = function(req, res) {
        Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
            if (err)
                res.status(200).send(err);
            res.json('update successfully  +   '+task);
        });
    };


    exports.delete_a_task = function(req, res) {


        Task.remove({
            _id: req.params.taskId
        }, function(err, task) {
            if (err)
                res.send(err);
            res.json({ message: 'Task successfully deleted' });
        });
    };







