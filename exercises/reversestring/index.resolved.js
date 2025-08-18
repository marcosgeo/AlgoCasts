// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // convert to an array and use the reverse method
    debugger;
    const arr = str.split('');
    return arr.reverse().join('');
}



function reverse2nd(str) {
    reversed = '';
    for (let char of str) {
        reversed = char + reversed;
        debugger;
    }
    return reversed;
}
reverse2nd('abcd'); // 'dcba'


function reverse3rd(str) {
    return str.split('').reduce( (reversed, character) => {
        return character + reversed;
    }, '')
}

module.exports = {reverse, reverse2nd, reverse3rd};
