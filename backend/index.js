
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();

mongoose.connect('mongodb+srv://lukeohanlon:d3vpr0j3ct@cluster0.j7o98k8.mongodb.net/todosDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/apis'));

app.use(function(err,req,res,next){ 
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 5000, function(){
    console.log('Ready to Go!');
})