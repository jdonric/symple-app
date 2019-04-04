var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function (req, res){
    console.log(`TUNED INTO 3000`);
});

