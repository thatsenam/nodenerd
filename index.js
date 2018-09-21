var express = require("express");
var app = express();
/*Home Route*/
app.get('/', function (req, res) {
    log(req)
    res.send('Home Page')
});


/*Login Page Route*/
app.get('/login', function (req, res) {
    log(req)
    res.send('Login Page')
});

/*Register Page Route*/
app.get('/register', function (req, res) {
    log(req)
    res.send('Registration page')
});


/*Starting Server*/
app.listen(8080, function (b) {
    log('server started')
});

function log(msg) {
    console.log(msg)
}