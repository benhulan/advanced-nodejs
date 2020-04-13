### Advanced NodeJS - Samer Buna

The following examples can be run in Linux/Mac Terminal to trigger various NodeJS tests.

#### Node != Javascript
 - `node repl.js` -- launches a repl with custom settings
 - `node process.js` -- shows how process is an event emitter
 - `node buffer.js` -- shows difference between string and buffer
 - `node bufferSlice.js` -- interesting example using buffer.slice and conversionMap
 - `node printStars.js 5 hello` -- runs a simple function
 - `node index.js` -- demonstrates module caching with ascii-art

#### Concurrency Model and Event Loop
 - `node callStack.js` 
  -- Example 1 intentionally throws an error to view the event loop's FILO behavior
  -- Example 2 demonstrates how the Event Loop takes a callback from the queue and adds it to the call stack
 - `node nextTick.js` -- demonstrates how to use process.nextTick to keep function calls asynchronous

#### Node's Event-Driven Architecture
 - `node asyncCallback.js` -- demonstrates Node's async callback pattern
 - `node asyncPromise.js` -- demonstrates async Promise, hybrid and async/await patterns (most Node packages assume cb structure)
 - `node syncEvents.js` -- simple synchronous demonstration of an event emitter
 - `node asyncEvents.js` -- nice asynchronous execution timer function
 - `node errors.js` -- explore handling errors with event emitter
 - `node client.js` -- handy task manager for NodeJS with event emitter

#### Node for Networking
 - `node net.js` -- starts a chat server using TCP sockets. run `nc localhost 8000` (or telnet) in another terminal session to test
 - `node dns.js` -- demonstrates Node's DNS module
 - `node udp.js` -- example of working with UDP sockets using the dgram module

#### Node for Web
 - `node http.js` -- demonstrates basic HTTP server and timeout to close connection. run `curl -i localhost:8000` in another terminal to test
 - `sudo node https.js` -- similar to basic HTTP example. follow inline instructions to generate .pem file. use system password when prompted
 - `node request.js` -- requests HTML from google.com
 - `node serverHttp.js` -- demonstrates http routing. run `curl localhost:8000/home`, `~/about`, `~/api`, `~/abc` in another terminal to test

#### Node's Common Built-in Libraries
 - `node fs1.js` -- iterates through `files/` directory and rewrites files without duplicate code
 - `node seed.js` -- creates `file2/` directory with mock files of various ages
 - `node fs2.js` -- iterates through `files2/` directory and removes files more than 7 days old
 - `node fs3.js` -- watches `files/` directory. test from another terminal with the following:
  - `touch files/test.txt.`, `echo 'hello' >> files/test.txt`, `rm files/test.txt`
 - `node console.js` -- Creates custom logger. test with `tail -f *.log`. Check inline comments for more tests
 - `NODE_DEBUG=web node debuglog.js` -- Conditionally add logger info based on process.env.NODE_DEBUG. run `curl -i localhost:8000` to test
 - `node debug debug.js` -- See inline comments for a description of debug commands
 - `node --inspect --debug-brk debug.js` -- prints URL to launch Chrome Dev-tools with an immediate debugger breakpoint

#### Working With Streams
 - `node createBigFile.js` -- creates `bigfile.txt` of about 426MB (1M lines of code)
 - `node serveBigFile.js` -- serves `bigfile.txt`
 - `node writeable.js` -- Basic writable demo. The stream echoes back whatever is typed into the console.
 - `node readable.js` -- Display a list of characters by passing them into a readable stream one at a time
 - `node readable.js | head -c3` -- Display first three characters and then exit the stream
 - `node duplex.js` -- Combines basic readable and writeable examples, grouping two independent features into an instance of a Duplex object
 - `node transform.js` -- More interesting than the duplex, the output of a transform is computed from its input
 - `node zip.js bigfile.txt` -- More practical example of transform. We can test with `gunzip bigfile.txt.gz`
 - `node zipCrypt.js bigfile.txt` -- Create encrypted zip file
 - `node unzipCrypt.js bigfile.txt.zz` -- Decrypt zip file

#### Clusters and Child Processes
 - `node spawn.js` - Spawn a child process to interact with your machine's OS directly. Linux used here.
 - `node spawnPipe.js` - Pipe the process.stdin (readable stream) into a child process, which is writable. Type something and ctrl+d to test
 - `node findWc.js` - File counting utility, pipes child processes together
 - `node exec.js` - Implementation of the file counting utility using exec
  - Better if data returned from the command is not big, because data will be buffered
 - `node spawnInherit.js` - Data is streamed and we can make the child process inherit the stdio objects of its parents

### etc
Most of the following single-line commands, tips and can be run without using a coded file.

#### npm commands
 - `npm ls -g --depth=0 --json` -- a nice way to show global npm modules
 - `npm i -D babel-cli` -- install babel-cli as dev dependency
 - `npm i -O nodemon` -- install nodemon as an optional dependency
 - `npm update` -- in package.json `~1.2` will update to `1.2.x`, etc
 - `npm i npm -g` -- update npm itself
 - `npm config list -l` -- view all config options
 - `npm config set init-author-name "Your Name"` -- set default author name for  - `npm init` command
 - `npm config set save true` -- makes  - `npm install` always use `--save` flag
 - `npm search term` -- search for npm packages with the word "term" in them
 - `npm shrinkwrap` -- will controlling package versions across user environments
 - `npm home lodash` -- command will open the homepage of a package in your default browser
 - `npm repo lodash` -- will open the repository
 - `npm prune` -- will clear out packages installed without the `--save` flag

#### Useful Node repl commands
 - `[tab][tab]` -- display global API objects
 - `.break` -- Sometimes you get stuck, this gets you out
 - `.clear` -- Alias for `.break`
 - `.editor` -- Enter editor mode
 - `.exit` -- Exit the repl
 - `.help` -- Print this help message
 - `.load` -- Load JS from a file into the REPL session
 - `.save` -- Save all evaluated commands in this REPL session to a file
 - `node -p "process.versions"` -- print the output of `process.versions` (replace w/ any node command) without running the repl
 - `"process.env" | less` -- prints a copy of user's environment
 - `"process.release.lts"` -- prints the lts name of the current Node
 - `http.STATUS_CODES` -- returns list of all HTTP status codes with simple descriptor

#### Notes:
 - Some file names have been changed from the original for camelCase consistency
 - References to the host instructional platform have been removed
 - `node_modules` is intentionally included in the git repo to understand the mock `find-me` package
 - `node stringDecoder.js` does not work on newer versions of NodeJS
 - `https.js` includes instructions to generate SSL certifcate for signing. key.pem and cert.pem are gitignored by this repo
 - The following files contain lists of commands to be run within a node repl, or with the `node -p "[COMMAND]"` syntax
  - `url.js`
  - `os.js`
 - `inherits.js` does not really do anything useful but demonstrates the deprecated `util.inherits` method which you may encounter
 - `bigfile.txt` has been gitignored by this repo and must be generated with `node createBigFile.js` before attempting `serveBigFile` tests
