const assert = require('chai').assert;
const quickSortArrayVersion = require('../lib/quick-sort-extra-arrays.js');
const randomArray = require('../lib/random-array.js');

describe('QuickSort Array Version', () => {

  it('should be a function', () => {
    assert.equal(typeof quickSortArrayVersion, 'function');
  })

  it('should sort an array of 2500', () => {
    let myArray1 = randomArray(2500, true);
    let myArray2 = randomArray(2500, true);
    assert.deepEqual(quickSortArrayVersion(myArray1), myArray2.sort(function(a,b){return a - b}));
  })

  it('should sort an array of 5000', () => {
    let myArray1 = randomArray(5000, true);
    let myArray2 = randomArray(5000, true);
    assert.deepEqual(quickSortArrayVersion(myArray1), myArray2.sort(function(a,b){return a - b}));
  })
})
