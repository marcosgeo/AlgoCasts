// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let mostCommon = '';
    let maxCount = 0;

    for (let char of str) {
        if (charMap[char] > 0) {
            charMap[char]++;
            if (charMap[char] > maxCount) {
                maxCount = charMap[char];
                mostCommon = char;
            }
        } else {
            charMap[char] = 1;
            if (maxCount === 0) {
                maxCount = 1;
                mostCommon = char;
            }
        }
    }
    debugger; // Added debugger here
    return mostCommon;
}

maxChar('zb ab zb zb ab ab ab '); // Example usage

function officialSolution(str) {
    const charMap = {};
    let mostCommon = '';
    let maxCount = 0;

    for (let char of str) {
        if (charMap[char] > 0) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let key in charMap) {
        if (charMap[key] > maxCount) {
            maxCount = charMap[key];
            mostCommon = key;
        }
    }

    return mostCommon;
}

module.exports = {maxChar, officialSolution};
