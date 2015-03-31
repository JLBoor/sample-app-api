var restUtils = require('./rest-utils');
var restify = require('restify');
var low = require('lowdb');


/**
 * Load Database,
 * and use underscore-db to manage ids
 **/
low.mixin(require('underscore-db'));
var db = low('db/db.json');


/**
 * Create and configure Server
 **/
var server = restify.createServer();
server.use(restify.bodyParser());
server.pre(function(req, res, next) {
    req.headers.accept = 'application/json';
    return next();
});


/**
 * Add routes
 **/
restUtils.addDomain(server, 'users', db);
restUtils.addDomain(server, 'companies', db);


/**
 * Start Listening
 **/
server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});