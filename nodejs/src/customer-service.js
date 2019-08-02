
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const outputPath = process.env.OUTPUT_PATH || '../lib/customer-service-output.txt';
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    console.log(inputString);
    return inputString[currentLine++];
}

function customerServiceHire(callTimes, currentHires) {
    console.log(callTimes);
    console.log(currentHires);

    callTimes.forEach(timePair => {
        
    });
}

function main() {
    const ws = fs.createWriteStream(outputPath);            // save output to file

    const x = parseInt(readLine(), 10);                     // x = number of customer service executives;

    const n = parseInt(readLine(), 10);                     // n = number of calls (data points)

    const m = parseInt(readLine(), 10);                     // m = number of integers in each data point

    let callsArray = [];
    let callTimes = [];
    for (let i = 0; i < n; i++) {
        callTimes = readLine().split(' ');
        callsArray[i] = callTimes;
    }

    const res = customerServiceHire(callsArray, x);

    ws.write(res.join(' ') + '\n');

    ws.end();
}