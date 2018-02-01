var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname + '/views/index.html')));
app.get('/sub', (req, res)=> res.sendFile(path.join(__dirname + '/views/sub.html')));

app.listen(5000, ()=>console.log("app running"));