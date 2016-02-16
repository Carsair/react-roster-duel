var express = require("express");
var app = express();
var path = require("path");
var lessMiddleware = require('less-middleware');

// Templates
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Style
app.use(lessMiddleware(__dirname + '/style'));
app.use(express.static(__dirname + '/style'));

// Client
app.use(express.static("client"));

app.get("/", function(req, res){
  // res.send("hello world");
  res.render("home");
});

app.listen(6001);
