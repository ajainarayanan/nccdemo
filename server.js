var http = require('http');
var path = require('path');
var express = require('express');
var finalhandler = require('finalhandler');
var assets_path = path.normalize(__dirname + '/assets');
var app = express();
app.use('/assets', [
  express.static(assets_path),
  function (req, res) {
    finalhandler(req, res)(false);
  }
]);

app.all(['/'], [function(req, res) {
   res.sendFile(path.normalize(__dirname + '/index.html'));
}]);

var server = http.createServer(app);
server.listen(8008, 'localhost', function() { console.log('Server up'); });

