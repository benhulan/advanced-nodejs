const util = require('util');
const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
	constructor() {
		super();
	}
	write(data) {
		this.emit('data', data);
	}
}

const stream = new CustomEmitter();