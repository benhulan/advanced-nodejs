const fs = require('fs');

// Asynchronous
fs.readFile(__filename, (err, data) => {
	if (err) throw err;

	// do something
});


// Syncrhonous
const data = fs.readFileSync(__filename);
// exceptions are immediately thrown

// do something with the data