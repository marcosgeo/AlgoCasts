const { reverse, reverse2nd, reverse3rd } = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
  expect(reverse2nd).toBeDefined();
  expect(reverse3rd).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse the alternate implementation', () => {
  expect(reverse2nd('abcd')).toEqual('dcba');
  expect(reverse2nd('  abcd')).toEqual('dcba  ');
})

test('Reverse the third implementation', () => {
  expect(reverse3rd('abcd')).toEqual('dcba');
  expect(reverse3rd('  abcd')).toEqual('dcba  ');
});
