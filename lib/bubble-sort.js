function bubbleSort(array) {
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length - (1 + i); j++){
      if (array[j] > array[j + 1]){
        // array.splice(j + 1, 0, array.splice(j, 1)[0]); //slow AF
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
