var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./views/index.html', 'utf8');
var options = { format: 'Letter' };


app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')));
app.get('/sub', (req, res) => res.sendFile(path.join(__dirname + '/views/sub.html')));

app.get('/newfile', (req, res) => {
    pdf.create(html, options).toFile('./file.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
 });
});

app.listen(5000, () => console.log("app running"));