var app = require("express")();
var path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", function(req, res){
  // res.send("hello world");
  res.render("home");
});

app.listen(6001);
