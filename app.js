var express = require("express");
var routes = require('./routes/index');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);

var http = require('http');
app.set('port', '3000');
var server = http.createServer(app);

server.listen(3000, () => {
 console.log("Server running on port 3000");
});

module.exports = app;
