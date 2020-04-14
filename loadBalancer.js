const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
	for (let i=0; i<1e5; i++); // simulate CPU work
	res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
	console.log(`Started process ${pid}`);
});

process.on('message', msg => {
	console.log(`Message from master: ${msg}`);
});

// simulate a random server crash
setTimeout(() => {
	process.exit(1)
}, Math.random() * 10000);