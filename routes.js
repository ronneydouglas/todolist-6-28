const express = require('express');
const router = express.Router();
const models = require('./models');

router.get('/', function(req, res) {
    res.redirect('/todo');
});

const
