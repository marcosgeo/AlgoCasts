const {maxChar, officialSolution } = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('officialSolution function exists', () => {
  expect(typeof officialSolution).toEqual('function');
})

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

test('maxChar works with spaces in the string', () => {
  expect(maxChar('ab zc ab zb ab zb ab ')).toEqual(' ');
});

test('officialSolution works with spaces in the string', () => {
  expect(officialSolution('zb ab zc zb ab ab ab ')).toEqual(' ');
});

test('officialSolution finds the most frequently used char', () => {
  expect(officialSolution('a')).toEqual('a');
  expect(officialSolution('abcdefghijklmnaaaaa')).toEqual('a');
});
test('officialSolution works with numbers in the string', () => {
  expect(officialSolution('ab1c1d1e1f1g1')).toEqual('1');
});

