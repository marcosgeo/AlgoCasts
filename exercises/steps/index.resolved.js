// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {  // my solution
    let empty = 0;
    let text = "";
    for (let i = 1; i < n + 1; i++){
        empty = n - i;
        text = "";
        for (let k = 0; k < i; k++){
            text += "#";
        }
        debugger;
        for (let j = 0; j < empty; j++) {
            text += " ";
        }
        debugger;
        console.log(text);
    }
}


function firstSolution(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair)
    }
}

function secondSolution(num, row=0, stair='') {  // recursive solution
    if (num === row) {
        return ;
    }

    if (num === stair.length) {
        console.log(stair);
        steps(num, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    secondSolution(num, row, stair);
}


steps(3);

module.exports = {steps, firstSolution, secondSolution};
