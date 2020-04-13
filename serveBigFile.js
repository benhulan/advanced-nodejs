const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	// Uncomment and test in Activity Monitor or Task Manager to see spike in memory consumption
	// fs.readFile('./bigfile.txt', (err, data) => {
	// 	if (err) throw err;

	// 	res.end(data);
	// });

  const src = fs.createReadStream('./bigfile.txt');
  src.pipe(res);
});

server.listen(8000);
