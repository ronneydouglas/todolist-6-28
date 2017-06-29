const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');

const app = express();




app.engine('mustache', mustacheExpress());
app.set("views", "./views");
app.set('view engine', 'mustache');
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.use(morgan('dev'));

app.use(routes);



app.listen(3000, function() {
    console.log('I can hear you');
});
