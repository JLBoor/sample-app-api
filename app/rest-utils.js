function getAll(req, res, next, domainDB) {
    res.send(domainDB.value());
    next();
}

function getOne(req, res, next, domainDB) {
    res.send(domainDB.get(req.params.id));
    next();
}

function createOne(req, res, next, domainDB) {
    res.send(domainDB.insert(req.body));
    next();
}

function updateOne(req, res, next, domainDB) {
    res.send(domainDB.update(req.params.id, req.body));
    next();
}

function delOne(req, res, next, domainDB) {
    res.send(domainDB.remove(req.params.id));
    next();
}


exports.addDomain = function(server, domainName, db) {


    var domainDB = db(domainName);

    server.get('/' + domainName,            function(req, res, next) { getAll(req, res, next, domainDB);       });
    server.post('/' + domainName,           function(req, res, next) { createOne(req, res, next, domainDB);    });

    server.get('/' + domainName + '/:id',    function(req, res, next) { getOne(req, res, next, domainDB);       });
    server.put('/' + domainName + '/:id',    function(req, res, next) { updateOne(req, res, next, domainDB);    });
    server.del('/' + domainName + '/:id',    function(req, res, next) { delOne(req, res, next, domainDB);       });


};