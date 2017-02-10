var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var baseRouter = express.Router();

baseRouter
    .get('/', function(req, res) {
        res.send('Hello World!');
    })
    .get('/home', function(req, res) {
        res.send('Hello World! I\'m in home page');
    });

app.get('/', baseRouter);

app.listen(3000, function() {
    console.log('Listening on port ' + port);
});