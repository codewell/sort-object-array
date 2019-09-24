const numberSorter = require('./numberSorter');
const stringSorter = require('./stringSorter');

const sortingFunctions = {
  string: stringSorter,
  number: numberSorter,
};

/**
 * Sort an object array based on a key
 * @param {array} array - Array with JavaScript objects
 * @param {string} key - What key in each object they should be sorted on
 * @param {boolean} reverse - Return reverse order?
 */
const sortObjectArray = (objectArray, key, reverse = false) => {
  try {
    if (objectArray.length < 2) {
      // No need to sort an array with one or zero elements
      return objectArray;
    }

    const type = typeof objectArray[0][key];

    if (reverse) {
      return [...objectArray].sort(sortingFunctions[type](key)).reverse();
    }

    return [...objectArray].sort(sortingFunctions[type](key));
  } catch (error) {
    return objectArray;
  }
};

module.exports = sortObjectArray;
