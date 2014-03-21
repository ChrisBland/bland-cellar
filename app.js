
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var wines = require('./routes/wines')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/add', wines.add);
app.post('/add', wines.saveWine);
app.get('/edit/:id', wines.edit);
app.get('/wines', wines.viewAll);
app.get('/find', wines.find);
app.post('/find', wines.search);
app.get('/wine/:id', wines.findWine);
app.get('/remove/:id', wines.removeWine);
app.get('/delete/:id', wines.deleteWine);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
