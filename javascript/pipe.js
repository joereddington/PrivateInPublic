#!/usr/bin/env node



var fs = require('fs');
var path = require('path');
eval(fs.readFileSync(path.resolve(__dirname, 'aes.js'))+'')
eval(fs.readFileSync(path.resolve(__dirname, 'privateinpublic.js'))+'')

console.log(path.resolve(__dirname, 'privateinpublic.js'));
console.log('hello world');



process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  process.stdout.write(parse(String(data)));
});
