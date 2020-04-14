const http = require('http');
const { fork } = require('child_process');

// Example 1: Request to '/' route cannot complete until request to '/compute' finshes
// Uncomment to test
// const longComputation = () => {
// 	let sum = 0;
// 	for (let i = 0; i < 1e6; i++) {
// 		sum += i;
// 	}
// 	return sum;
// };

const server = http.createServer();

server.on('request', (req, res) => {
	if (req.url === '/compute') {
		// Uncomment for Example 1
		// const sum = longComputation();
		// return res.end(`Sum is ${sum}`);
		
		// Example 2
		const compute = fork('compute.js');
		compute.send('start');
		compute.on('message', sum => {
			res.end(`Sum is ${sum}`);
		});
	} else {
		res.end('Ok')
	}
});

server.listen(3000);
