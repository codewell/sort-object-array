# @codewell/sort-object-array
Sort an array with objects in JavaScript based on keys

## Installation
```
npm install @codewell/sort-object-array
```

## Basic usage
```JavaScript
import sortObjectArray from '@codewell/sort-object-array';

const arr = [{age: 1}, {age: 3}, {age: 2}];

const sortedArr = sortObjectArray(arr, 'age');
const sortedArr2 = sortObjectArray(arr, 'age', true); // Reverse order
```

