const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
	execute(asyncFunc, ...args) {
		console.time('execute');
		this.emit('begin');
		asyncFunc(...args, (err, data) => {
			if (err) {
				return this.emit('error', err);
			}

			this.emit('data', data);
			console.timeEnd('execute');
			this.emit('end');
		});
	}
}

const withTime = new WithTime();

withTime.on('data', (data) => {
	console.log(`Length: ${data.length}`);
});

// invoke first with prependListener:
withTime.prependListener('data', (data) => {
	console.log(`Characters: ${data.toString().length}`);
});

// optionally remove
// withTime.removeListener('data', (data) => {
// 	console.log(`Length: ${data.length}`);
// 	console.log(`Characters: ${data.toString().length}`);
// });

// handling errors, method 1:
// withTime.on('error', console.error);

// handling errors, method 2. can use process.once to prevent EventEmitter
// from emitting the same error multiple times
process.on('uncaughtException', (err) => {
	console.log(err);
	// do some cleanup
	process.exit(1); // exit anyway
})

// withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, __filename);
