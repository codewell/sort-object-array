/**
 * String sorting function for objects
 * @param {string} key - Object key
 * @returns {number} - 
 */
const stringSorter = key => (object1, object2) => {
  if (object1[key] > object2[key]) {
    return 1;
  }

  if (object1[key] < object2[key]) {
    return -1;
  }

  return 0;
}

module.exports = stringSorter;
