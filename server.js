var express = require('express');
var app = express();

app.get('/home/pass/1/3/5', function(request, response)
{
    response.end('Hello World');
});

app.post('/', function(request, response)
{
    response.send('Hello World');
});