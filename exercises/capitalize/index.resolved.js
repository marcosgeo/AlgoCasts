// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {  // my solution
    const words = str.split(' ');
    let new_phrase = '';
    for (let word of words){
        new_phrase += word[0].toUpperCase() + word.slice(1) + ' ';
    }
    return new_phrase.trim();
}

function firstSolution(srt) {  // most directly solution
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    words.join(' ');
}

/* 
a more brute force approach

one weakness of this solution is the hardcoding the first letter of the string
not all phrases starts with a letter that could be capitalize. also, this 
solution requires a little more effort to understand what is going on. 
*/
function secondSolution(str) { 
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }

    return result;
}

module.exports = capitalize;
