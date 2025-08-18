const {palindrome, palindrome2nd} = require('./index');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
  expect(typeof palindrome2nd).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

test('palindrome2nd: "abba" is a palindrome', () => {
  expect(palindrome2nd('abba')).toBeTruthy();
});

test('palindrome2nd: "abcdefg" is not a palindrome', () => {
  expect(palindrome2nd('abcdefg')).toBeFalsy();
} );

test('palindrome2nd: "  abba" is a palindrome', () => {
  expect(palindrome2nd('  abba')).toBeFalsy();
});

test('palindrome2nd: " abba " is a palindrome', () => {
  expect(palindrome2nd(' abba ')).toBeTruthy();
});

