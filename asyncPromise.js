const fs = require('fs');

// Hybrid Promise / cb style:
const readFileAsArray = function(file, cb = () => {}) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, function(err, data) {
			if (err) {
				reject(err);
				return cb(err);
			}

			const lines = data.toString().trim().split('\n');
			resolve(lines);
			cb(null, lines);
		});
	});
};

// Promise-only
// const readFileAsArray = function(file) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(file, function(err, data) {
// 			if (err) {
// 				return reject(err);
// 			}

// 			const lines = data.toString().trim().split('\n');
// 			resolve(lines);
// 		});
// 	});
// };

// example promise-style call
readFileAsArray('./numbers.txt')
  .then(lines => {
  	const numbers = lines.map(Number);
  	const oddNumbers = numbers.filter(number => number % 2 === 1);
  	console.log('odd numbers count:', oddNumbers.length);
  })
  .catch(console.error);

// example cb call
readFileAsArray('./numbers.txt', (err, lines) => {
	if (err) throw err;

	const numbers = lines.map(Number);
	const oddNumbers = numbers.filter(number => number % 2 === 1);
	console.log('odd numbers count:', oddNumbers.length);
});

// example with async-await
async function countOdd () {
	try {
		const lines = await readFileAsArray('./numbers.txt');
		const numbers = lines.map(Number);
		const oddCount = numbers.filter(num => num % 2 === 1).length;
		console.log('odd numbers count:', oddCount);
	} catch(err) {
		console.error(err)
	}
}

countOdd();