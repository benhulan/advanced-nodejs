const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files2');

const files = fs.readdirSync(dirname);
const dayInMs = 1000*60*60*24;

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
  	if (err) throw err;
  	
  	if (stats.mtime.getTime() < Date.now()-7*dayInMs) {
  		fs.unlink(filePath, (err) => {
  			if (err) throw err;
  			console.log(`${filePath} deleted`);
  		});
  	};
  });
});
