const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes/main.route');
const connection = require('./services/connection.service');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(router);

app.listen(1337, function() {
  console.log('Server was starting');
})