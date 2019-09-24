const sortObjectArray = require('../src');

const array = [
  { string: 'B', number: 1 },
  { string: 'A', number: 3 },
  { string: 'C', number: 2 },
];

const numberSorted = [
  { string: 'B', number: 1 },
  { string: 'C', number: 2 },
  { string: 'A', number: 3 },
];

const numberSortedReversed = [
  { string: 'A', number: 3 },
  { string: 'C', number: 2 },
  { string: 'B', number: 1 },
];

const stringSorted = [
  { string: 'A', number: 3 },
  { string: 'B', number: 1 },
  { string: 'C', number: 2 },
];

const stringSortedReversed = [
  { string: 'C', number: 2 },
  { string: 'B', number: 1 },
  { string: 'A', number: 3 },
];
/**
 * Numbers
 */
test('Sort on number key', () => {
  expect(sortObjectArray(array, 'number'))
    .toEqual(numberSorted);
});

test('Sort on number key reversed order', () => {
  expect(sortObjectArray(array, 'number', true))
    .toEqual(numberSortedReversed);
});

/**
 * Strings
 */
test('Sort on string key', () => {
  expect(sortObjectArray(array, 'string'))
    .toEqual(stringSorted);
});

test('Sort on string key reversed order', () => {
  expect(sortObjectArray(array, 'string', true))
    .toEqual(stringSortedReversed);
});