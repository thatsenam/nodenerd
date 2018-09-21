var router = require('express').Router();
var data = require('../data/users')

router.get('/test', function (req, res) {

    res.status(200).json({message: "Connected"});
})
router.get('/users', function (req, res) {

    res.status(200).json(data.models);
})
router.get('/cars', function (req, res) {
    res.header({'Content-Type': 'application/json'})
    res.status(200).json(data.cars);
})

module.exports = router;