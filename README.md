### Advanced NodeJS - Samer Bruna

#### Notes:

These are sandbox NodeJS files and tests. Initializing as git repo to track changes in index.js

`node repl.js` -- launch a repl with custom settings
`node process.js` -- show how process is an event emitter
`node buffer.js` -- show difference between string and buffer
`node printStars.js 5 hello` -- run a simple function
`node index.js` -- demonstrate module caching with ascii-art


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
