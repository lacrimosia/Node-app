var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./views/index.html', 'utf8');
var options = {
    format: 'Letter',
    border: {
        "top": "1in", // default is 0, units: mm, cm, in, px
        "right": "1in",
        "bottom": "1in",
        "left": "1in"
    }
};
var location = require('location-href');
location();


app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')));
app.get('/sub', (req, res) => res.sendFile(path.join(__dirname + '/views/sub.html')));

app.get('/newfile', (req, res) => {
    pdf.create(html, options).toFile('./file.pdf',(err, res) => {
        if (err) return console.log(err);
        console.log('File saved.', res);
    }); 
    res.sendFile(path.join(__dirname + '/views/download.html'));  
});

// download nodemon for node server
app.listen(5000, () => console.log("app running"));