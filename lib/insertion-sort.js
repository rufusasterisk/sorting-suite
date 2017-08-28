function insertionSort(array) {
  for (let i = 0; i < array.length; i ++) {
    let currentVal = array[i];
    let pos = i;
    while (pos > 0 && array[pos-1] > currentVal){
      array[pos] = array[pos-1];
      pos --;
    }
    array[pos] = currentVal;
  }
  return array;
}

module.exports = insertionSort;
