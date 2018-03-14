var express = require('express');
var app = express();

app.get('/home', function(request, response)
{
    response.send('Hello World');
});