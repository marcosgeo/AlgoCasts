const {reverseInt, officialReverseInt }= require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('Official reverseInt function extists', () => {
  expect(officialReverseInt).toBeDefined();
})

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
});

test('Official reverseInt flips a positive number', () => {
  expect(officialReverseInt(5)).toEqual(5);
  expect(officialReverseInt(15)).toEqual(51);
  expect(officialReverseInt(90)).toEqual(9);
  expect(officialReverseInt(2359)).toEqual(9532);
})

test('Official reverseInt flips a negative number', () => {
  expect(officialReverseInt(-5)).toEqual(-5);
  expect(officialReverseInt(-15)).toEqual(-51);
  expect(officialReverseInt(-90)).toEqual(-9);
  expect(officialReverseInt(-2359)).toEqual(-9532);
});
