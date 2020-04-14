const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus} CPUs`);
	for (i=0; i<cpus; i++) {
		cluster.fork();
	}
	// Output Worker node object for each CPU:
	// console.dir(cluster.workers, { depth: 2 });
	Object.values(cluster.workers).forEach(worker => {
		worker.send(`Hello Worker ${worker.id}`)
	});

	cluster.on('exit', (worker, code, signal) => {
		if (code !== 0 && !worker.exitedAfterDisconnect) {
			console.log(`Worker ${worker.id} crashed. ` +
									'Starting a new worker...');
		  cluster.fork();
		}
	});
} else {
	require('./loadBalancer.js');
}
