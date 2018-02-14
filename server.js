var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./views/index.html', 'utf-8');
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

var _ = require("lodash");


app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => res.send(path.join(__dirname + '/views/index.html')));
app.get('/sub', (req, res) => res.send(path.join(__dirname + '/views/sub.html')));

app.get('/newfile', (req, res) => {
    pdf.create(html, options).toFile('./file.pdf',(err, res) => {
        if (err) return console.log(err);
        console.log('File saved.', res);
    }); 
    res.send(__dirname + '/views/download.html');  
});

var a = [1,2,3,"copper",4,5];
var changes = _.indexOf(a, "copper");
console.log(setProfile({name: "Sia Termine", gender: "F", age: 21}));
function setProfile(o){
    o.name = o.name || null;
    o.age = o.age >= 21 || null;
    o.gender = o.gender || null;
    return o;
}
//console.log(changes);

// download nodemon for node server
var port = 5000;
app.listen(port, () => console.log("app running on port "+ port));