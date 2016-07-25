// Demonstrates how to load and use a core module
var fs = require('fs');
var data = fs.readFileSync('sample.txt').toString();
console.log(data);
