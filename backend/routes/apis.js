const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// get todos
router.get('/todos',function(req,res,next){
    Todo.find({}).then(function(todos){
        res.send(todos);
    }).catch(next);
});

// add new todo 
router.post('/todos',function(req,res,next){
    Todo.create(req.body).then(function(todo){
        res.send(todo);
    }).catch(next);
});

// update a todo
router.put('/todos/:id',function(req,res,next){
    Todo.findOneAndUpdate({_id: req.params.id},req.body).then(function(todo){
        Todo.findOne({_id: req.params.id}).then(function(todo){
            res.send(todo);
        });
    });
});

// delete a todo
router.delete('/todos/:id',function(req,res,next){
    Todo.findOneAndDelete({_id: req.params.id}).then(function(todo){
        res.send(todo);
    });
});

// delete all completed todos
router.delete('/todos', function (req, res, next) {
    Todo.deleteMany({ completed: true })
      .then(function (result) {
        res.send({ message: 'Successfully deleted all completed todos.' });
      })
      .catch(next);
  });

module.exports = router;