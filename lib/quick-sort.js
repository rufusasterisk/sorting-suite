function quickSort(array) {
  recursiveQuickSort(array, 0, array.length - 1);
  return array;
}

function partition(array, lowStart, highStart) {
  let pivotIndex = highStart;
  let lowIndex = lowStart;
  let highIndex = highStart - 1;

  while (lowIndex <= highIndex) {
    if ( array[highIndex] > array[pivotIndex]) {
      highIndex --;
    }
    else if (array[lowIndex] <= array[pivotIndex]) {
      lowIndex ++;
    }
    else {
        [array[highIndex], array[lowIndex]] = [array[lowIndex], array[highIndex]];
        highIndex --;
        lowIndex ++;
    }
  }
  [array[highIndex + 1], array[pivotIndex]] = [array[pivotIndex], array[highIndex + 1]];
  return highIndex + 1;
}

function recursiveQuickSort(array, lowStart, highStart) {
  let pivot = partition(array, lowStart, highStart);
  if (lowStart < pivot - 1){
    recursiveQuickSort(array, lowStart, pivot - 1)
  }
  if (highStart > pivot + 1) {
    recursiveQuickSort(array, pivot + 1, highStart)
  }
}

module.exports = quickSort;
