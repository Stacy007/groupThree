var db = require("../models");
var firebase = require("firebase");
// Read and set environment variables
require("dotenv").config();

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Perform account creation
  app.post("/api/createAccount", function(req, res) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(req.body.email, req.body.password)
      .then(function(success){
        console.log("user created account successfully");
        res.redirect("/home");
      } ,function(error) {

        // Handle Errors here.
        var errorCode = error.code;
        var objectToRender = {
          errorMessage: error.message,
          email: req.body.email
        }
        // ...
        console.log(errorCode, objectToRender.errorMessage);
        res.render("createAccount", objectToRender);
      })
  });

  // Perform login
  app.post("/api/login", function(req, res) {
    firebase
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then( function(success) {
        console.log("user logged in successfully");
        res.redirect("/home");
      }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var objectToRender = {
          errorMessage: error.message,
          email: req.body.email
        }
        
        // ...
        console.log(errorCode, objectToRender.errorMessage);
        res.render("login", objectToRender);
      })
  });
};
