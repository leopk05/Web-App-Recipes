const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/recipes")

const app = express();

let recipes = []

let initial = recipes.length === 0? "No Recipes to Show" : "My Recipes";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {initialText: initial, recipeList: recipes})

});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});
