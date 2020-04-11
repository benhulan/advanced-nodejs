// console.Console Example: Test in another terminal with `tail -f *.log`
const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

setInterval(() => {
	console2.log(new Date());
	console2.error(new Error('Whoops!'));
}, 3000);

// Comment out the previous example and un-comment below for more examples
// console.assert(3 == '3'); // undefined (true)
// console.assert(3 === '3'); // Assertion failed (false)

// console.trace('here'); // similar to console.err, but also prints call stack

// // start and stop a timer
// console.time('test');

// setTimeout(() => {
// 	console.timeEnd('test');
// }, 1234);
