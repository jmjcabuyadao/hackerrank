/** 
 * This code snippet takes in 2 lines of input
 * Line 1: integer N
 * Line 2: array of N space-separated integers A
 * Output: array A with elements in reverse
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

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
    return inputString[currentLine++];
}

// Complete the reverseArray function below.
function reverseArray(a) {
    let newArray = [];
    for (let key = a.length-1; key >= 0; key--) {
        newArray.push(a[key]);
    }

    return newArray.filter((item) => item != ' ');
}

function main() {
    const outputPath = process.env.OUTPUT_PATH || 'output.txt';

    const ws = fs.createWriteStream(outputPath);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
