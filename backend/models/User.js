var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
    email: String,
    pwd: String,
    name: String,
    desc: String,
})


//pre save event

userSchema.pre('save', function(next) {
    var user = this
    debugger;
    if (!user.isModified('pwd'))
        return next()

    bcrypt.hash(user.pwd, null, null, (err, hash) => {
        if(err) return next(err)

        console.log(hash);
        user.pwd = hash;
        next()
    })
})

module.exports = mongoose.model('User', userSchema);