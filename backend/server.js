var express = require('express');
// to establish the connection between angular and node.
var cors = require('cors');
// to get the json data from the body of the service.
var bodyParser = require('body-parser');
//to access the database
var mongoose = require('mongoose');
var app = express();

// user defined models
var User = require('./models/User.js');

var posts =[
    {
        message:'hello'
    },{
        message:'hi'
    }
]
app.use(cors());
app.use(bodyParser.json());

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/register',(req,res)=>{
    var userData = req.body;
    var user = new User(userData);
    user.save((err, result)=>{
        if(err) {
            console.log('saving user error');
        }

        res.sendStatus(200);
    })
})

mongoose.connect('mongodb://siva:sivamani1@ds125821.mlab.com:25821/meanlearning',{useMongoClient: true}, (err) => {
    if(!err){
        console.log('connected to mongo');
    }
})

app.listen(3000);
