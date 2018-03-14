var express = require('express');
var app = express();

app.get('/home/pass/1/3/5', function(request, response)
{
    var data = {
        id: 1,
        msg: 'Hello World'
    };

    response.render('home', data);
});

app.post('/', function(request, response)
{
    response.send('Hello World');
});