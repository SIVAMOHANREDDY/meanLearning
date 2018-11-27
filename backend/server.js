var express = require('express');
// to establish the connection between angular and node.
var cors = require('cors');
// to get the json data from the body of the service.
var bodyParser = require('body-parser');
//to access the database
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
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
    let userData = req.body;
    let user = new User(userData);
    user.save((err, result)=>{
        if(err) {
            console.log('saving user error');
        }

        res.sendStatus(200);
    })
})

app.post('/login', async (req, res) => {
let loginData  = req.body;
var user = await User.findOne({email:loginData.email});

if(!user){
    return res.status(401).send({message: 'Email or password invalid'});
}
if(loginData.pwd != user.pwd){
    return res.status(401).send({message: 'invalid password'});
}
var payload = {}
var token = jwt.encode(payload,'123');
console.log(token);
console.log(user);
res.status(200).send({token})
});

mongoose.connect('mongodb://siva:sivamani1@ds125821.mlab.com:25821/meanlearning',{useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('connected to mongo');
    }
})

app.listen(3000);
