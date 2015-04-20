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
server.pre(restify.CORS());
server.use(restify.bodyParser());
server.use(restify.fullResponse());

server.use(
    function crossOrigin(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.pre(function(req, res, next) {
    req.headers.accept = 'application/json';
    return next();
});


/**
 * Add routes
 **/
restUtils.addDomain(server, 'me', db);
restUtils.addDomain(server, 'identities', db);
restUtils.addDomain(server, 'users', db);
restUtils.addDomain(server, 'companies', db);

server.post('/authentication', function create(req, res, next) {
    var auth = req.headers['authorization'];

    //FIXME FL: do proper validation
    if(req.params.username == req.params.password) {
        res.statusCode = 200;
        res.send(db('identities').get("0"));
    } else {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        res.end('invalid credentials');
    }
    return next();
});

function unknownMethodHandler(req, res) {
    if (req.method.toLowerCase() === 'options') {
        var allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Api-Version, Authorization'];

        if (res.methods.indexOf('OPTIONS') === -1) res.methods.push('OPTIONS');

        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', allowHeaders.join(', '));
        res.header('Access-Control-Allow-Methods', res.methods.join(', '));
        res.header('Access-Control-Allow-Origin', req.headers.origin);

        return res.send(204);
    }
    else
        return res.send(new restify.MethodNotAllowedError());
}

server.on('MethodNotAllowed', unknownMethodHandler);
server.on('uncaughtException', function (request, response, route, error) {
    console.log(error.stack);
});

/**
 * Start Listening
 **/
server.listen(9002, function() {
    console.log('%s listening at %s', server.name, server.url);
});