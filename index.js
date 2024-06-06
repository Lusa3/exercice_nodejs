const express = require("express");
const path = require("path");
const app = express();
const articles = require("./data/db.json");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) =>{
    res.render("index");
})