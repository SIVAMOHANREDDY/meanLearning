var mongoose = require('mongoose')


module.exports = mongoose.model('Post', {
    msg: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

// here 'userId' maintaining the one to many relationship with User Table 
// it means One User can post multiple messages so (maintain the UserId in Post table also so that )