const print = require('./printStars');
const EventEmitter = require('events');

class WithLog extends EventEmitter {
	execute(taskFunc) {
		console.log('Before execution');
		this.emit('begin');
		taskFunc();
		this.emit('end');
		console.log('After execution');
	}
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('About to execute'));
withLog.on('end', () => console.log('Done with execute'));

withLog.execute(() => print(15, 'Executing task'));
