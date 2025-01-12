json-bodyparser
===============

Middleware for express/restify. Intercepts requests with the
`X-JSON-Body: field` header and replaces `req.body` with the parsed contents of `req.body.field`.

Created for use with [backbone-formdata](http://github.com/ricardobeat/backbone-formdata).

MIT license
(http://ricardo.mit-license.org)
