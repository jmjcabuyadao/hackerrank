/**
Given an array of strings, group anagrams together.

Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
**/

const sortString = value => {
    let valArr = value.split('');
    let valArrSorted = valArr.sort();

    return valArrSorted.join('');
}

const getIndexesAsString = (array, checkpoint) => {
    let indexes = [], i;
    for (i = 0; i < array.length; i++)
        if (array[i] === checkpoint)
            indexes.push(i);

    return indexes.sort().join('');
}

const groupAnagrams = input => {
    let valuesArray = Object.values({...input});

    // Sort each element of array to find similar strings
    let sortedValuesArray = valuesArray.map( value => {
        return sortString(value);
    });

    let anagramsGroup = [];
    let anagramsIndexGroup = [];

    // Compare each string in array of sorted strings
    // Get index of each equal string
    sortedValuesArray.forEach(sortedValue => {
        let indexString = getIndexesAsString(sortedValuesArray, sortedValue);
        if (!anagramsIndexGroup.includes(indexString)) {
            anagramsIndexGroup.push(indexString);
        }
    });

    // Split each index group to push values in output array
    anagramsIndexGroup.forEach(indexString => {
        let anagramsValueGroup = [];
        indexString.split('').forEach(valueIndex => {
            anagramsValueGroup.push(valuesArray[valueIndex]);
        });
        anagramsGroup.push(anagramsValueGroup.sort());
    });

    return anagramsGroup;
}

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
let output = groupAnagrams(input);

console.log(output);
