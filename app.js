//Requirements

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

//Code snippets taken from "Secrets" project app.js. Some mongoose passport code left out, might need later.



//Routing

app.get("/", function(req, res){
    res.render("home");
  });
  
app.get("/history", function(req, res) {
    res.render("history");
});
//   app.get("/login", function(req, res){
//     res.render("login");
//   });
  
//   app.get("/register", function(req, res){
//     res.render("register");
//   });
  
//   app.get("/secrets", function(req, res){
//     User.find({"secret": {$ne: null}}, function(err, foundUsers){
//       if (err){
//         console.log(err);
//       } else {
//         if (foundUsers) {
//           res.render("secrets", {usersWithSecrets: foundUsers});
//         }
//       }
//     });
//   });
  
//   app.get("/submit", function(req, res){
//     if (req.isAuthenticated()){
//       res.render("submit");
//     } else {
//       res.redirect("/login");
//     }
//   });
  
//   app.post("/submit", function(req, res){
//     const submittedSecret = req.body.secret;
  
  //Once the user is authenticated and their session gets saved, their user details are saved to req.user.
    // console.log(req.user.id);
  
//     User.findById(req.user.id, function(err, foundUser){
//       if (err) {
//         console.log(err);
//       } else {
//         if (foundUser) {
//           foundUser.secret = submittedSecret;
//           foundUser.save(function(){
//             res.redirect("/secrets");
//           });
//         }
//       }
//     });
//   });
  
//   app.get("/logout", function(req, res){
//     req.logout();
//     res.redirect("/");
//   });
  
//   app.post("/register", function(req, res){
  
//     User.register({username: req.body.username}, req.body.password, function(err, user){
//       if (err) {
//         console.log(err);
//         res.redirect("/register");
//       } else {
//         passport.authenticate("local")(req, res, function(){
//           res.redirect("/secrets");
//         });
//       }
//     });
  
//   });
  
//   app.post("/login", function(req, res){
  
//     const user = new User({
//       username: req.body.username,
//       password: req.body.password
//     });
  
//     req.login(user, function(err){
//       if (err) {
//         console.log(err);
//       } else {
//         passport.authenticate("local")(req, res, function(){
//           res.redirect("/secrets");
//         });
//       }
//     });
  
//   });
  
  
  
  
  
  
  
  app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });
  