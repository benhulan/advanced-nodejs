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

	// Object.values(cluster.workers).forEach(worker => {
	// 	worker.send(`Hello Worker ${worker.id}`)
	// });

	console.log(`Master PID: ${process.pid}`);

	cluster.on('exit', (worker, code, signal) => {
		if (code !== 0 && !worker.exitedAfterDisconnect) {
			console.log(`Worker ${worker.id} crashed. ` +
									'Starting a new worker...');
		  cluster.fork();
		}
	});

	// Implements zero-downtime restart with the cluster module

	// Note: Node uses SIGUSR1 for its debugger
	process.on('SIGUSR2', () => {
		const workers = Object.values(cluster.workers);

		const restartWorker = (workerIndex) => {
			const worker = workers[workerIndex];
			if (!worker) return;

			worker.on('exit', () => {
				if (!worker.exitedAfterDisconnect) return;
				console.log(`Exited process ${worker.process.pid}`);
				cluster.fork().on('listening', () => {
					restartWorker(workerIndex+1);
				});
			});


			worker.disconnect();
		};

		restartWorker(0);
	});

} else {
	require('./loadBalancer.js');
}
