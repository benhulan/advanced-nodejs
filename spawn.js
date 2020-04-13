const { spawn } = require('child_process');

// Does not use a shell. First arg is command. 2nd arg is an array of all additional arguments
const child = spawn('find', ['./files/', '-type', 'f']);

child.stdout.on('data', (data) => {
	console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
	console.error(`child stderr:\n${data}`); // pass an invalid arg into the array on line 3 to test
});

child.on('exit', (code, signal) => {
	console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child process: disconnect, error, message, close
// stdio objects: child.stdin, child,stdout, child.stderr
