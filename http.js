const server = require('http').createServer();

server.on('request', (req, res) => {
	res.writeHead(200, { 'content-type': 'text/plain' });
	res.write('Hello, world\n');

	setTimeout(() => {
		res.write('Hello again, world\n');
	}, 1000);

	setTimeout(() => {
		res.write('Yet another "Hello, world", world\n');
	}, 2000);

	// will never happen because timout exceed server timeout
	setTimeout(() => {
		res.write('Goodbye, cruel world\n');
	}, 12200);

});

server.timeout = 10000; // default server timeout is 2 min
server.listen(8000);
