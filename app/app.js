const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./router");

const app = express();

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  })
  app.use(bodyParser.json());
  app.use(routes);

module.exports = app;
