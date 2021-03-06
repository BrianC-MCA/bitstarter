var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var infile = "index.html"; 

app.get('/', function(request, response) {
  var buffer = fs.readFileSync(infile, "utf8");
  response.send(buffer);
 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
