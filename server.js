const express = require("express");
var mysql = require('mysql');
const app = express();
require('dotenv').config();
//define port
const port=3000;

app.get("/", (req, res) => {
var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD
});

con.connect(function(err) {
  if (err) res.send(err);
  res.send("Changed!! Connected!");
});
})


app.listen(port, () => {
  console.log(`running at port ${port}`);
});