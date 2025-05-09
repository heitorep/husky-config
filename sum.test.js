const sum = require('./sum');

test('soma 1 + 2 para dar 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma 1 + 2 para dar 4', () => {
  expect(sum(1, 2)).toBe(4);
});

test('soma 1 + 2 para dar 5', () => {
  expect(sum(1, 2)).toBe(5);
});     