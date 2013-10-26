var express = require('express');
var app = express();

app.use(express.static('app'));

app.post('/register', function(req, res) {
  res.redirect('/#/quiz');
});

var server = app.listen(8080);

