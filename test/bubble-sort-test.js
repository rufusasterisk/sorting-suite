const assert = require('chai').assert;
const bubbleSort = require('../lib/bubble-sort.js');

describe('BubbleSort', function(){

  it('should sort numbers', function(){
    let myArray = [8,7,6,5,4,3,2,1];
    assert.deepEqual(bubbleSort(myArray), [1,2,3,4,5,6,7,8])
  })
})
