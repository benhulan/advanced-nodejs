const { Readable } = require('stream');

// inefficient:
// const inStream = new Readable();

// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // char codes 64 - 90
// inStream.push(null);

// only read a single character at a time as it is pushed into the stream
const inStream = new Readable({
	read(size) {
		setTimeout(() => {
			if (this.currentCharCode > 90) { // 12438) { // Japanese alphabet
				this.push(null);
				return;
			}
			this.push(String.fromCharCode(this.currentCharCode++));		
		}, 100)
	}
});

inStream.currentCharCode = 65; // 12353; // Japanese alphabet

inStream.pipe(process.stdout);

// call node readable.js | head -c3
process.on('exit', () => {
	console.error(
		`\n\ncurrentCharCode is ${inStream.currentCharCode}`
	);
});

// handle error
process.stdout.on('error', process.exit);
