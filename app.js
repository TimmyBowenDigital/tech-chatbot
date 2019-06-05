var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var session = require('express-session');

//grab environment variables from .env
var dotenv = require('dotenv');
dotenv.config();

//load passport
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var secured = require('./services/middleware/secured');
var userInViews = require('./services/middleware/userInViews');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat');
//var loginRouter = require('./routes/login');
var userRouter = require('./routes/user');
var authRouter = require('./routes/auth');

var app = express();

//configure passport to use auth0
var strategy = new Auth0Strategy({
	domain: process.env.AUTH0_DOMAIN,
	clientID: process.env.AUTH0_CLIENT_ID,
	clientSecret: process.env.AUTH0_CLIENT_SECRET,
	callbackURL:
		process.env.AUT0_CALLBACK_URL || 'http://localhost:3000/callback'
},
function (accessToken, refreshToken, extraParams, profile, done) {
	return done(null, profile);
}
);

var sess = {
	secret: 'r@!nb0wUn!c0rn',
	cookies: {},
	resave: false,
	saveUninitialized: true
};

if (app.get('env') === 'production') {
	sess.cookie.secure = true; //serve secure cookies, requires https
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.use(strategy);
app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());

app.use(userInViews());
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', chatRouter);
//app.use('/', loginRouter);
app.use('/', authRouter);
app.use('/', userRouter);

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
