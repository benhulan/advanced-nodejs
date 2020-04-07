
// How does `require` work?

// console.log(module);
/* 
  paths:
   [ '/home/ben/Dev/advanced-node/node_modules',
     '/home/ben/Dev/node_modules',
     '/home/ben/node_modules',
     '/home/node_modules',
     '/node_modules' ] }
*/

// console.log('In ./index.js');
// require('find-me'); // search in all the paths above, plus $HOME/.node_modules, $HOME/.node_libraries, $PREFIX/lib/node

// const fs = require('fs');  // *although the resolve step returns immediately for core modules

// const printStars = require('./printStars');
// printStars(10, 'Hi!');

// Node caches files when required multiple times
require('./ascii-art')(); // invoke function if using module.exports
// console.log(require.cache);
// delete require.cache['/Users/[REPLACE_WITH_LOCAL_PATH_TO_FILE]/ascii-art.js']; // this can be used to demonstrate removing a file from the cache

require('./ascii-art')();