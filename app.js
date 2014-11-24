
/**
 * Module dependencies
 */

var express = require('express');
var routes = require('./routes');
var http = require('https');
var path = require('path');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

var app = module.exports = express();

/**
 * Configuration
 */

// all environments

// app.engine('.html', require('html'));

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '/')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);


// redirect all others to the index (HTML5 history)
app.get('/home', routes.index);
app.get('/game', routes.index);
app.get('/highscore', routes.index);


/**
 * Start Server
 */

http.createServer(options, app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
