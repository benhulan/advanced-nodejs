const fs = require('fs');
const server = require('https')
  .createServer({
  	key: fs.readFileSync('./key.pem'),
  	cert: fs.readFileSync('./cert.pem'),
  });

server.on('request', (req, res) => {
	res.writeHead(200, { 'content-type': 'text/plain' });
	res.end('Hello, world\n');
});

server.timeout = 10000; // default server timeout is 2 min
server.listen(443);

// NOTE: run the following in terminal to generate SSL .pem files:
// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
