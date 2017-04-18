#!/usr/bin/env node


var fs = require('fs');

// file is included here:
eval(fs.readFileSync('privateinpublic.js')+'');

console.log('hello world');



process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  process.stdout.write(parse(data));
});
