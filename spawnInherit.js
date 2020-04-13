const { spawn } = require('child_process');

// with Shell: true, spawn() will use a shell but will not buffer data like exec()
const child = spawn('find ./files/ -type f -name "*.js"', {
	stdio: 'inherit',
	shell: true
});

// Example 2: change working directory
// const child2 = spawn('find . -type f -name "*.js"', {
// 	stdio: 'inherit',
// 	shell: true,
// 	cwd: '/Users/[username]/[path-to-directory]',
// });


// Example 3: using the env option
const child3 = spawn('echo $ANSWER', {
	stdio: 'inherit',
	shell: true,
	env: { ANSWER: 42 }
});
