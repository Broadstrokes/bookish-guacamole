var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var firebaseCred = require('./../firebaseSAC');

// firebase.initializeApp({
//   servericeAccount: firebaseCred,
//   databaseUrl: 'https://myapp-b5edd.firebaseio.com/' 
// });

// var db = firebase.database();
// var ref = db.ref("restricted_access/secret_document");
// ref.once("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function(error) {
//   console.log('The read failed: ', error.code);
// });





// Initialize the app with no authentication
firebase.initializeApp({
  databaseURL: "https://myapp-b5edd.firebaseio.com/"
});

// The app only has access to public data as defined in the Security Rules
var db = firebase.database();
var ref = db.ref("/some_public_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
