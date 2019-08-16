'use strict';

const fs = require('fs');

const inputPath = process.env.INPUT_PATH || '../lib/sum-queries-input.txt';
const outputPath = process.env.OUTPUT_PATH || '../lib/sum-queries-output.txt';
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

const readLine = () => {
    return inputString[currentLine++];
}

const main = () => {
    const ws = fs.createWriteStream(outputPath);            // save output to file
    let matrix = [];
    let queries = [];

    const rowCount = parseInt(readLine(), 10);              // number of rows
    const colCount = parseInt(readLine(), 10);              // number of columns

    for (let r = 0; r < rowCount; r++) {
        matrix.push(readLine().split(' ').map(col => parseInt(col, 10)));
    }

    const queryCount = parseInt(readLine(), 10);            // number of queries
    for (let q = 0; q < queryCount; q++) {
        queries.push(readLine().split(' ').map(col => parseInt(col, 10)));
    }

    let result = querySumMatrix(matrix, queries, colCount);

    ws.write(result.join(' '));

    ws.end();
}

const querySumMatrix = (matrix, queries, colCount) => {
    
    // Compute for all sums
    let sumCollection = [];
    for (let row = 0; row < matrix.length; row++) {
        
        // Compute Row Sums
        let rowSum = getRowSum(matrix[row])
        if (!isNaN(rowSum)) {
            sumCollection.push(rowSum);
        }

        // Compute Column Sums
        let colSum = 0;
        for (let col = 0; col < colCount; col++) {
            colSum += matrix[col][row];
        }

        if (!isNaN(colSum)) {
            sumCollection.push(colSum);
        }
    }

    let result = [];
    for (let index = 0; index < queries.length; index++) {
        let count = 0;
        sumCollection.forEach( sumValue => {
            let [l, r] = queries[index];
            if (isInRange(l, r, sumValue)) count++;
        });
        result.push(count);
    }

    return result;
}

const getRowSum = rowArray => rowArray.reduce( (a, b) => a + b, 0);
const isInRange = (left, right, value) => value >= left && value <= right;