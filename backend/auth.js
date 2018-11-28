
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');
var User = require('./models/User.js');
// var express = require('express');
// var router = express.Router();

module.exports = {
    register: (req, res) => {
            let userData = req.body;
            let user = new User(userData);
            user.save((err, newUser) => {
                if (err) {
                    console.log('saving user error');
                    return res.status(500).send({errors: err, message: 'Error saving user'});
                }
        
                var payload = { sub: newUser._id }

                var token = jwt.encode(payload, '123');
                res.status(200).send({ token })
            })
    },
    login: async (req, res) => {
        let loginData = req.body;
        var user = await User.findOne({ email: loginData.email });
    
        if (!user) {
            return res.status(401).send({ message: 'Email or password invalid' });
        }
        bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
            if(!isMatch){
                return res.status(401).send({ message: 'invalid password' });
            }
    
            var payload = { sub: user._id }

            var token = jwt.encode(payload, '123');
            res.status(200).send({ token })
    
        })
    
    }
}