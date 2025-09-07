// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let current = 1;
    let previous = 0
    for (let i = 1; i < n; i++) {
        let temp = current;
        current = current + previous;
        previous = temp;
    }
    return current;
}

function fibRecursive(n) {
    if (n < 2){
        return n;
    }

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

module.exports = fib;
