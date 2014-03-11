var express = require('express')
  , MarvelController = require('marvel');

var app = express();

app.get('/marvel', MarvelController.get);
app.get('/marvel/refresh', MarvelController.refresh);

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});