// replace all `http` with `https` for secure requests
const http = require('http');

// req: http.ClientRequest
const req = http.get(  // .request({ hostname: 'www.google.com' }, (res) => { ... })
	'http://www.google.com',
	(res) => {
		// http.IncomingMessage
		console.log(res.statusCode);
		console.log(res.headers)
	}
);

req.on('error', (err) => console.log(err));
console.log(req.agent); // http.Agent

// req.end(); // needed with .request, but not .get
