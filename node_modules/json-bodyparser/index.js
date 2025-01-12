//     json-bodyparser 0.1.0
//
//     (c) 2013 Ricardo Tomasi
//     Freely distributable under the MIT license
//     (http://ricardo.mit-license.org)

// Middleware for express/restify. Intercepts any requests with the
// `X-JSON-Body: key` header. Created for use with
// [backbone-formdata](http://github.com/ricardobeat/backbone-formdata).

module.exports = function (options) {

    var header = (options && options.header || 'x-json-body').toLowerCase()

    return function JSONbodyParser (req, res, next) {
        var key
        if (key = req.headers[header]) {
            try {
                req.body = JSON.parse(req.body[key])
            } catch (e) {}
        }
        next()
    }
}
