### Advanced NodeJS - Samer Buna

#### Notes:
These are sandbox NodeJS files and tests.

`node repl.js` -- launches a repl with custom settings
`node process.js` -- shows how process is an event emitter
`node buffer.js` -- shows difference between string and buffer
`node bufferSlice.js` -- interesting example using buffer.slice and conversionMap
`node printStars.js 5 hello` -- runs a simple function
`node index.js` -- demonstrates module caching with ascii-art
`node callStack.js` 
  -- Example 1 intentionally throws an error to view the event loop's FILO behavior
  -- Example 2 demonstrates how the Event Loop takes a callback from the queue and adds it to the call stack
`node nextTick.js` -- demonstrates how to use process.nextTick to keep function calls asynchronous
`node asyncCallback.js` -- demonstrates Node's async callback pattern
`node asyncPromise.js` -- demonstrates async Promise, hybrid and async/await patterns (most Node packages assume cb structure)
`node syncEvents.js` -- simple synchronous demonstration of an event emitter
`node asyncEvents.js` -- nice asynchronous execution timer function
`node errors.js` -- explore handling errors with event emitter
`node client.js` -- handy task manager for NodeJS with event emitter

#### npm commands
`npm ls -g --depth=0 --json` -- a nice way to show global npm modules
`npm i -D babel-cli` -- install babel-cli as dev dependency
`npm i -O nodemon` -- install nodemon as an optional dependency
`npm update` -- in package.json `~1.2` will update to `1.2.x`, etc
`npm i npm -g` -- update npm itself
`npm config list -l` -- view all config options
`npm config set init-author-name "Your Name"` -- set default author name for `npm init` command
`npm config set save true` -- makes `npm install` always use `--save` flag
`npm search term` -- search for npm packages with the word "term" in them
`npm shrinkwrap` -- will controlling package versions across user environments
`npm home lodash` -- command will open the homepage of a package in your default browser
`npm repo lodash` -- will open the repository
`npm prune` -- will clear out packages installed without the `--save` flag
