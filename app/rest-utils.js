function getAll(req, res, next, domainDB) {

    domainDB = domainDB.chain();

    var params = req.params;

    //FIXME the parameters name are hardcoded to the example client. Make it flexible
    if(params.name) {
        domainDB = domainDB.where({name: params.name});
    }

    if(params._orderBy) {
        domainDB = domainDB.sortBy(params._orderBy);
    }

    var elements = domainDB.value();

    var metadata = {totalElements: elements.length};

    if(params._pageNumber && params._pageSize) {
        var pageNumber = parseInt(params._pageNumber);
        var pageSize = parseInt(params._pageSize);
        var start = (pageNumber - 1) * pageSize;
        var end = start + pageSize;
        elements = elements.slice(start, end);
    }

    res.send({elements: elements, _metadata: metadata});
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