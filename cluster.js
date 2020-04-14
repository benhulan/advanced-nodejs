const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
	const cpus = os.cpus().length;

	console.log(`Forking for ${cpus} CPUs`);
	for (i=0; i<cpus; i++) {
		cluster.fork();
	}
} else {
	require('./loadBalancer.js');
}
