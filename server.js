var favicon = require("serve-favicon");
var logger = require("connect-logger");
var errorhandler = require("errorhandler");
var _static = require("serve-static");
var serveDefault = require("./app/serve-default.js");

var upload = require("./app/upload.js");
var multer = require("multer");
var multer_upload = multer({ storage: multer.memoryStorage({}) });

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

app.post("/file/upload", multer_upload.single("file"), upload);

app.use(serveDefault());

http.createServer(app).listen(process.env.PORT || 8080);
