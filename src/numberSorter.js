/**
 * Number sorter function
 * TODO: Do some error handling
 * e.g. if one of the objects does not contain
 * the key.
 * @param {*} obj1 
 * @param {*} obj2 
 */
const numberSorter = key => (obj1, obj2) => obj1[key] - obj2[key];

module.exports = numberSorter;
