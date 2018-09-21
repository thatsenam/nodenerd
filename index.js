var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var externalRoutes = require('./routes/webroute');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


/*External Routes*/
app.use('/api', externalRoutes)

/*Home Route*/
app.get('/', function (req, res) {
    log(req)
    res.render('home')
});


/*Login Page Route*/
app.get('/login', function (req, res) {
    log(req)
    res.render('login')
});

/*Register Page Route*/
app.get('/register', function (req, res) {
    log(req)
    res.render('register')
});


/*Starting Server*/
app.listen(8080, function (b) {
    log('server started')
});

function log(msg) {
    console.log(msg)
}