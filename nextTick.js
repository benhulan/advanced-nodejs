const fs = require('fs');

function fileSize (fileName, cb) {
	if (typeof fileName !== 'string') {
		// return cb(new TypeError...) would be a synchronous call inside an async function (bad)
		return process.nextTick(
			cb,
			new TypeError('fileName should be a string')
		);
	}

	fs.stat(fileName, (err, stats) => {
		if (err) {
			return cb(err);
		}

		cb(null, stats.size);
	});
}

// replace __filename with a non-string value to see async error
fileSize(__filename, (err, size) => {
	if (err) throw err;

	console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!');
