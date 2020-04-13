const { spawn } = require('child_process');

const child = spawn('wc');

// pipe a readable stream into our writable one
process.stdin.pipe(child.stdin);

child.stdout.on('data', (data) => {
	console.log(`child stdout:\n${data}`);
});
