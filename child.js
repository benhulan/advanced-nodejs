// listening for the message event on the global process object
process.on('message', (msg) => {
	console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
	process.send({ counter: counter++ });
}, 1000);
