var express = require('express');
// to establish the connection between angular and node.
var cors = require('cors');
// to get the json data from the body of the service.
var bodyParser = require('body-parser');
//to access the database
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');
var auth = require('./auth.js');

var app = express();

// user defined models
var User = require('./models/User.js');
var Post = require('./models/Post.js');

mongoose.Promise = Promise;

var posts = [
    {
        message: 'hello'
    }, {
        message: 'hi'
    }
]
app.use(cors());
app.use(bodyParser.json());

function checkAuthenticated(req,res, next){
    if(!req.header('authorization')){
        return res.status(401).send({message:'Unauthorized. Missing Auth Header'})
    }
    var token = req.header('authorization').split(' ')[1];

    var payload = jwt.decode(token, '123');

    if(!payload){
        return res.status(401).send({message: "Unathorized auth Header Invalid"})
    }
    console.log('userId:'+ payload.sub);
    req.userId = payload.sub;

    next();
}

app.get('/posts/:id', async (req, res) => {
    var userId = req.params.id;
    var postMessages = await Post.find({userId})
    res.send(postMessages)
})

app.post('/post', checkAuthenticated, (req, res) => {
    var postData = req.body;
    postData.userId = req.userId;
    var post = new Post(postData);
    
    post.save((err, result)=>{
        if(err)
        {
            console.log('saving post error');
            return res.status(500).send({message: 'saving post error'})
        }
        res.sendStatus(200);
    })
})

//get users from the database
app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, 'email name');
        res.send(users);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

})

//get user by Id from the database
app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, 'email desc name');
        res.send(user);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

})

app.post('/register', auth.register)

app.post('/login', auth.login)

mongoose.connect('mongodb://siva:sivamani1@ds125821.mlab.com:25821/meanlearning', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('connected to mongo');
    }
})

app.listen(3000);
