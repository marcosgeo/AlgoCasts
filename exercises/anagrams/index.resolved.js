// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {  // my solution
    const clearedA = stringA.replace(/[^\w]/g, "").toLowerCase();
    const clearedB = stringB.replace(/[^\w]/g, "").toLowerCase();
    
    if (clearedA.length != clearedB.length){
        return false;
    }
    const objA = {};
    const objB = {};
    for (let char of clearedA){
        if (objA[char] > 0) {
            objA[char] += 1;
        } else {
            objA[char] = 1;
        }
    }

    for (let char of clearedB) {
        if (objB[char] > 0) {
            objB[char] += 1;
        } else {
            objB[char] = 1;
        }
    }

    for (let key in objA) {
        if (objA[key] != objB[key]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

function firstSolution(stringA, stringB) {
    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        debugger;
        return false;
    }

    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) {
            debugger;
            return false;
        }
    }
    debugger;
    return true;
}

function secondSolution(stringA, stringB) {
    let cleanedA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let cleanedB = stringB.replace(/[^\w]/g, "").toLowerCase();

    cleanedA = cleanedA.split('').sort().join('');
    cleanedB = cleanedB.split('').sort().join('');

    return cleanedA === cleanedB;    
}

firstSolution('A tree, a life, a bench', 'A tree, a fence, a yard');
module.exports = {anagrams, firstSolution, secondSolution};
