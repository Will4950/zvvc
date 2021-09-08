const express = require('express');
const expressWinston = require('express-winston');
const config = require('./config');
const logger = require('./logger');
const sessionmw = require('./session');
const routes = require('./routes');
const app = express();

app.set('port', config.port);
app.set('view engine', 'pug');
app.set('views', __dirname + '\\..\\views');

app.use(express.static(__dirname + '/../public/js'));
app.use(express.static(__dirname + '/../public/stylesheets'));
app.use(express.static(__dirname + '/../../node_modules/bootstrap/dist/js'));
app.use(express.static(__dirname + '/../../node_modules/jquery/dist'));
app.use('/fontawesome', express.static(__dirname + '/../../node_modules/@fortawesome/fontawesome-free/webfonts'));
app.use(expressWinston.logger({winstonInstance: logger}));
app.use(sessionmw);
app.use(routes);

module.exports = app;