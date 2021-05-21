//Requirements

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use('/favicon.ico', express.static('images/favicon.ico'));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));




//Routing

app.get("/", function(req, res){
    res.render("home");
  });

  app.get("/new", function(req, res) {
    res.render("new");
  });

app.get("/messages", function(req, res) {
    res.render("messages");
  });

  app.get("/connect", function(req, res) {
    res.render("connect");
  });

  app.get("/grow", function(req, res) {
    res.render("grow");
  });

  // app.get("/about", function(req, res) {
  //   res.render("about");
  // });

// app.get("/give", function(req, res){
//     res.render("give");
//   });

  //Heroku settings

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


  


  
// app.listen(3000, function() {
//     console.log("Server started on port 3000.");
//   });
  