const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const files = fs.readdirSync(dirname);

const logWithTime = (msg) => 
  console.log(`${new Date().toUTCString()}: ${msg}`);

fs.watch(dirname, (eventType, filename) => {
  // console.log(eventType, filename);
  
  // add and delete are both "rename" events
  if (eventType === 'rename') {
    const index = files.indexOf(filename);
    
    if (index >= 0) {
      files.splice(index, 1);
      logWithTime(`the file "${filename}" was deleted`);
      return;
    }

    files.push(filename);
    logWithTime(`new file "${filename}" was created`)
    return;
  }

  // eventType === 'change'
  logWithTime(`the file "${filename}" was changed`);
})
