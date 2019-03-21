const express = require('express');
const app = express();
// const config = require('./config/config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const router = require('./routes/main.route');
const mongoose = require('mongoose');
const connection = require('./services/connection.service');
const MongoStore = require('connect-mongo')(session);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1337');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// app.use(session({
//   secret: config.session.secret,
//   key: config.session.key,
//   cookie: config.session.cookie,
//   store: new MongoStore({mongoose_connection: mongoose.connection})
// }));
// app.use((req, res, next) => {
//   req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
//   res.send('Visits: ' + req.session.numberOfVisits);
// });

app.use(session({
  secret: "Shh, its a secret!",
  key: 'sid',
  resave: false,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 60000
  },
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
// app.use((req, res, next) => {
//   // res.locals.session = req.session;
//   // next();
//   if (!req.session.cartCount) {
//     req.session.cartCount = 0;
//   }
//   console.log('cart count', req.session.cartCount);
//   next();
// });

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(router);

app.listen(1337, function() {
  console.log('Server was starting');
})