var express = require('express');
var fs = require('fs');




var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send((fs.readFileSync('index.html'));
 //  response.send('index.html')
});

var port = process.env.PORT || 5000;
app.listen(app.get('port'), function() {
  console.log("Listening on" + app.get('port');
});
