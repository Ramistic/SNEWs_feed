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
/* GET users listing. */

router.get('/', function(req, res, next) {
  request('https://newsapi.org/v2/top-headlines?sources=google-news,bbc-news,bloomberg,wired,techcrunch,reuters,new-scientist,bbc-sport,business-insider-uk,google-news-uk,ign,new-scientist,australian-financial-review,business-insider,vice-news,google-news&apiKey=f299beab84f7466b85a9a8c9ec409a89', function (error, response, body) {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    var body = JSON.parse(body);
    console.log(body);
    res.json(body);
  });
});
module.exports = router;
