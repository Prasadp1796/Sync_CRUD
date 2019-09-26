var router = require('express').Router();

//Users Schema Imported Here
var userSchema = require('../Schema/userSchema');

//Method To Render Manage Users Page
router.get('/manageUsers', function (req, res) {
    userSchema.find(function (err, data) {
        if (err)
            throw err;
        else
            res.render("ManageUsers/index", {Users: data})
    })
});

//Method To Render Add User Page
router.get('/addUser', function (req, res) {
    res.render('ManageUsers/addUser');
});

//Method To Add New User
router.post('/addNewUser', function (req, res) {
    var newUser = new userSchema(req.body);
    newUser.save(function (err) {
        if (err)
            throw err;
        else
            res.redirect('/manageUsers');
    })
});

//Method To Edit User
router.get('/editUser', function (req, res) {
    userSchema.findOne({_id: req.query.UserId}, function (err, data) {
        if (err)
            throw err;
        else
            res.render('ManageUsers/editUser', {User: data});
    })
});


//Method To Update User Details
router.post('/editUserDetails', function (req, res) {
    console.log(req.body)
    userSchema.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, function (err) {
        if (err)
            throw err;
        else
            res.redirect('/manageUsers');
    })
});

//Method To Remove User
router.get('/deleteUser', function (req, res) {
    userSchema.findOneAndRemove({_id: req.query.UserId}, function (err) {
        if (err)
            throw err;
        else
            res.redirect('/manageUsers');
    })
});
module.exports = router;