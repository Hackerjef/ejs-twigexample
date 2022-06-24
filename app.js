var express = require('express');
var path = require("path");

// twig requirements
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');
let loader = new TwingLoaderFilesystem('./templates');
let twing = new TwingEnvironment(loader);


var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/html/index.html'));
})

app.get('/fmtexample', function (req, res) {
    var user = require("./userobj.json") // Example user object

    twing.render("fmtexample.html", { 'user': user }).then((output) => {
        res.end(output);
    });
})


app.listen(8080)