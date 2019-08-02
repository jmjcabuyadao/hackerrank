'use strict';

const fs = require('fs');

const inputPath = process.env.INPUT_PATH || '../lib/reverse-characters-input.txt';
let inputArray = [];

fs.readFile(inputPath, (error, buffer) => {
    inputArray = [...buffer.toString()];
    reverseWords(inputArray);
});

function reverseWords(input) {
    let currentLength = 0;
    let i = 0;
    input.forEach(element => {
        if (element != ' ') {
            currentLength++;
            console.log("Character: ", element);
            console.log("Current Length: ", currentLength);
        } else {
            for (var i = 0; i <= Math.floor((currentLength - 1) / 2); i++) {
                let el = input[i];
                input[i] = input[currentLength - 1 - i];
                input[currentLength - 1 - i] = el;
            }
            console.log("Space Index: ", currentLength);
        }
    });
    console.log(input);
}