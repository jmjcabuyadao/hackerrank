console.log("Hello World!");

const fs = require('fs');
let outputPath = process.env.OUTPUT_PATH || 'output.txt';

fs.writeFileSync(outputPath, "Hello from Node.js");