// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midpoint = Math.floor((2 * n -1) / 2);
    for (let row = 0; row < n; row++){
        let level = '';
        
        for (let col = 0; col < 2 * n - 1; col++){
            if (midpoint - row <= col && midpoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

function pyramidRec(rows, size=0) {  // piramid with recursive solution
    if (rows === 0) {
        return;
    }
    if (size === 0) {
        size = 2 * rows - 1
    }
    let level = '';
    const midpoint = Math.floor((2 * size - 1) / 2);
    for (let col = 0; col < size; col++){
        if (midpoint <= col && col >= midpoint){
            level += '#';
        } else {
            level += ' ';
        }
    }
    console.log(level);
    pyramidRec(rows - 1, size);
}

module.exports = {pyramid, pyramidRec};
