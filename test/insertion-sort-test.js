const assert = require('chai').assert;
const insertionSort = require('../lib/insertion-sort.js');

describe('Insertion Sort', function(){

  it('should sort an array', function(){
    let myArray = [8,7,6,5,4,3,2,1];

    assert.deepEqual(insertionSort(myArray), [1,2,3,4,5,6,7,8]);

  })
})
