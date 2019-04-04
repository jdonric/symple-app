var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = 2500;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.render('index');
});

app.listen(PORT, function (req, res){
    console.log(`TUNED INTO ${PORT}`);
});

