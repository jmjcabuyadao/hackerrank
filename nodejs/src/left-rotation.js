/** 
 * This code snippet takes in an input from file containing 2 lines
 * Line 1: integer n (number of elements in array) and integer d (number of left moves to be taken)
 * Line 2: space-separated array of n integers
 * Output: A single line of space-separated n integers denoting the final state of the array after performing d left rotations.
*/

'use strict';

const fs = require('fs');

const inputPath = process.env.INPUT_PATH || '../lib/left-rotation-input.txt';
const outputPath = process.env.OUTPUT_PATH || '../lib/left-rotation-output.txt';

let inputString = '';
let currentLine = 0;

fs.readFile(inputPath, (error, buffer) => {
    inputString = buffer.toString();
    try {
        inputString = inputString.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));

        main();
    } catch (e) {
        console.error(e);
    }
});

function readLine() {
    return inputString[currentLine++];
}

function leftRotation(array, steps) 
{
    let leftArray = [];
    const lastKey = (array.length) - 1;
    for (let taken = 1; taken <= steps; taken++) {
        for (let i = 0; i <= lastKey; i++) {
            let newKey = i - 1;
            if (newKey < 0) newKey = lastKey;
            leftArray[newKey] = array[i];
        }
        array = leftArray;
        leftArray = [];
    }
   
    return array;
}

function main() {
    const ws = fs.createWriteStream(outputPath);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const res = leftRotation(a, d);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
