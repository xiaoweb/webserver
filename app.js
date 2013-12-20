/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var webconfig = require('./webconfig');
var path = require('path');
var routes = require('./route');
var app = express();
var flash = require('express-flash');
var kissy = require("kissy");
var websocket = require("websocket").server;

/*all environments*/
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
/*cookie*/
app.use(express.cookieParser());
app.use(express.session({secret: "zhou"}));
/*flash*/
app.use(flash());
/*router*/
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

/* development only*/
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
webconfig.open();
routes.route(app);

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

var wsserver = new websocket({
    httpServer: server,
    autoAcceptConnections: false
});

wsserver.on("request", function (request) {
    if (request.resource == "/socket") {
        var connection = request.accept('echo-protocol', request.origin);
        console.log((new Date()) + ' Connection accepted.');
        connection.on('message', function (message) {
            if (message.type === 'utf8') {
                console.log('Received Message: ' + message.utf8Data);
                connection.sendUTF(message.utf8Data);
            }
            else if (message.type === 'binary') {
                console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
                connection.sendBytes(message.binaryData);
            }
        });
        connection.on('close', function (reasonCode, description) {
            console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });
    }

});