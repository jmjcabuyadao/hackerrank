console.log("Hello World!");

const fs = require('fs');
let outputPath = process.env.OUTPUT_PATH || '../lib/hello-world-output.txt';

fs.writeFileSync(outputPath, "Hello from Node.js");