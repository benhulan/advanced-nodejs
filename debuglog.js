const util = require('util');
const debuglog = util.debuglog('web');

const server = require('http').createServer();

server.on('request', (req, res) => {
	debuglog('HTTP Request: %s', req.url); // will only display if NODE_DEBUG=web, per line 2
	res.writeHead(200, { 'content-type': 'text/plain' });
	res.end('Server running\n');
});

server.listen(8000);
