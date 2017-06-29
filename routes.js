const express = require('express');
const router = express.Router();
const models = require("./models");

router.get('/', function(req, res) {
    res.redirect('/task');
});

router.get('/task', function(req, res) {
    models.tasks.findAll().then(function (task) {
        res.render('index',{
            task: task
        });
    });
});




module.exports = router;
