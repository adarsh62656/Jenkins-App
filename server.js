const express = require("express");
var mysql = require('mysql');
const app = express();

//define port
const port=3000;

app.get("/", (req, res) => {
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gnu123"
});

con.connect(function(err) {
  if (err) res.send(err);
  res.send("Connected!");
});
})


app.listen(port, () => {
  console.log(`running at port ${port}`);
});