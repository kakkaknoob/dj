var express = require('express');
var app = express();

app.get('/', function(request, response)
{
    response.end('Hello World');
});

app.post('/', function(request, response)
{
    response.send('Hello World');
});