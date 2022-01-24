var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "Response": "Hello From Basil m jacob Using NodeJs APP" }');
});

