var express = require('express');
var router = express.Router();
var firebase = require('firebase');

var firebaseRef = new Firebase('https://myapp-b5edd.firebaseio.com/');

var firebaseContent = {};
var firebaseRef.on('value', function (snapshot) {
  firebaseContent = snapshot.val();
}, function(error) {
  console.log('The read failed: ', error.code);
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
