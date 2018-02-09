var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var mongoose2 = new mongoose.Mongoose();
var request = require('request');
var fetch = require("fetch").fetchUrl;
var https = require('https');
var document = ('./routes/views/index.html');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var MongoClient = require('mongodb').MongoClient;
var pv = require('../private.js');

mongoose.connect('mongodb://' + pv.username + ':' + pv.password + '@' + pv.code + '.mlab.com:35956/users');
var myModel = mongoose.model('user', new mongoose.Schema({ name: String, password: String }));
var comment = mongoose.model('comment', new mongoose.Schema({ name: String, email: String, comment: String }));


router.post('/', function(req, res, next) {
  //req.send('Test');
  //console.log("email: " + req.body.email);
  //console.log("password: " + req.body.psw);
  var userInstance = new myModel({ name: req.body.email, password: 'test' });
  userInstance.save();
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/comment', function(req, res, next){
  var commentBox = new comment({ name: req.body.name, email: req.body.email, comment: req.body.comment });
  commentBox.save();
  res.redirect('/');
});


/* GET users listing. */
router.get('/getcomments', function(req, res, next) {
  var db_comments = [];
  comment.find({}, function(err, data) {
    if (err) {
      res.send('Error: ' + data);
    }
    db_comments.push(data);
    res.json(db_comments);
  });
});

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
  });

module.exports = router;
