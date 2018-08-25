var db = require("../models");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.render("login", {
      errorMessage: ""
    });
  });

  app.get("/createAccount", function(req, res) {
    res.render("createAccount", {
      errorMessage: ""
    });
  });

  // Load index page
  app.get("/home", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.render("index", {
        items: dbItems
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/item/:id", function(req, res) {
    db.Item.findOne({ where: { id: req.params.id } }).then(function(dbItem) {
      res.render("item", {
        item: dbItem
      });
    });
  });

  app.get("/newitem", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.render("newitem", {
        items: dbItems
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
