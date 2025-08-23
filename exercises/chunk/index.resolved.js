// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {  // pay atention with 'of' or 'in'; the last, in, return indexes as strings
        const last = chunked[chunked.length - 1];  // retrive the last array in chunks
        debugger;
        if (!last || last.length === size) {
            chunked.push([element]); // create a new array and put the first element
        } else {
            last.push(element); // put the value inside last array
        }
    }
    return chunked;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

function chunk2(array, size) { // copilot solution
    const chunks = [];
    let index = 0;
    while (index < array.length) {
        chunks.push(array.slice(index, index + size));
        index += size;
    }
    return chunks;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); // Example usage

module.exports = {chunk, chunk2};
