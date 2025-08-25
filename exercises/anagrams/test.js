const {anagrams, firstSolution } = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('firstSolution function exists', () => {
  expect(typeof(firstSolution)).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});


test('firstSolution: "A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    firstSolution('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});

test('firstSolution: "Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(firstSolution('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

