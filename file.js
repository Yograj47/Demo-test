// sync read and write operations in Node.js
// const { readFileSync, writeFileSync } = require('fs');
// const path = require('path');

// let first = null;

// writeFileSync(path.join(__dirname, 'content', 'result-sync.txt'), `Here is the result: ${first}`)

// first = readFileSync(path.join(__dirname, 'content', 'result-sync.txt'), 'utf-8');
// console.log(first);


// async read and write operations in Node.js
const { readFile, writeFile } = require('fs');
const path = require('path');

readFile(path.resolve(__dirname, 'content', 'result-sync1.txt'), 'utf-8', (err, res) => {
    if(err){
        console.error(
            `Error reading file: ${err.message}`
        );
        return;
    } else{
        console.log(res);
        
    }
})

writeFile(path.resolve(__dirname, 'content', 'result-sync1.txt'), 'This is a new content', {flag:'a'}, (err)=>{
    if(err) throw err;
    console.log('File written successfully');
})