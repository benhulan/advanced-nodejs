const { exec } = require('child_process');

// uses a shell
exec('find . -type f -name "*.js" | wc -l', (err, stdout, stderr) => {
	if (err) {
		console.error(`exec error: ${err}`);
		return;
	}

	console.log(`Number of files ${stdout}`);
});
