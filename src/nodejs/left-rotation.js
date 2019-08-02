/** 
 * This code snippet takes in 2 lines of input
 * Line 1: integer n (number of elements in array) and integer d (number of left moves to be taken)
 * Line 2: space-separated array of n integers
 * Output: A single line of space-separated n integers denoting the final state of the array after performing d left rotations.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    const ws = fs.readFileSync(process.env.INPUT_PATH);
    console.log(ws);
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
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
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const res = leftRotation(a, d);
}
