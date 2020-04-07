// process is an event emitter

process.on('exit', (code) => {
	// do one final synchronous operation
	// before the node process terminates
	console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err) => {
	// something went unhandled
	// do any cleanup and exit
	console.error(err); // don't just do that
	process.exit(1);
});

// keep the event loop busy
process.stdin.resume();

// trigger a TypeError exception
console.dog('woof');
