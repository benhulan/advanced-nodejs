const { Writable } = require('stream');

const outStream = new Writable({
	write(chunk, encoding, callback) {
		console.log(chunk.toString());
		callback();
  }
});

process.stdin.pipe(outStream);

// essentially our own implementation of the following:
process.stdin.pipe(process.stdout);