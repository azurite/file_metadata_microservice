var favicon = require("serve-favicon");
var logger = require("connect-logger");
var errorhandler = require("errorhandler");
var _static = require("serve-static");

var express = require("express");
var app = express();

var path = require("path");
var http = require("http");

if(app.get("env") === "development") {
  app.use(logger());
  app.use(errorhandler());
}

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(_static(path.join(__dirname, "public")));

http.createServer(app).listen(process.env.PORT || 8080);
