// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // Convert the string to lowercase and remove spaces
    const reversed = str.split('').reverse().join('');
    // Compare the cleaned string with its reverse
    return str === reversed
}
palindrome("abba");


function palindrome2nd(str) {
    const isEqual = str.split('').every( (char, index) => {
        return char === str[str.length - index - 1];
    })
    return isEqual;
}


module.exports = {palindrome, palindrome2nd};
