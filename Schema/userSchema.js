var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    FirstName: String,
    MiddleName: String,
    LastName: String,
    EmailID: {type: String, unique: true, sparse: true},
    Contact: {type: String, unique: true, sparse: true}
});

module.exports = mongoose.model('users',userSchema);