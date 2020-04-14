const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
	console.log('Message from child:', msg);
});

// pass message to child function
forked.send({ hello: 'world' });
