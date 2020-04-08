// structure of an event emitter
const EventEmitter = require('events'); // import

class Logger extends EventEmitter {}; 	// extend

const logger = new Logger();						// init

logger.emit('event'); 									// emit

logger.on('event', listenerFunc); 			// addListener