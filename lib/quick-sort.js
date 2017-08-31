function quickSort(array) {
  recursiveQuickSort(array, 0, array.length - 1);
  return array;
}

function partition(array, lowStart, highStart) {
  let pivotIndex = highStart;
  let lowIndex = lowStart;
  let highIndex = highStart - 1;

  while (lowIndex <= highIndex) {
    //look for a value larger than pivot from the left
    if ( array[highIndex] > array[pivotIndex]) { //if the current high number is greater than pivot
      highIndex --; //move high index to the left
    }
    //look for a value smaller than pivot from the right
    else if (array[lowIndex] <= array[pivotIndex]) { //if the current low number is less than pivot
      lowIndex ++; //move low index to the right
    }
    //swap the two
    else { //the high number is less than or equal to the pivot AND the low number is greater than the pivot
        [array[highIndex], array[lowIndex]] = [array[lowIndex], array[highIndex]];
        highIndex --;
        lowIndex ++;
    }
  }
  [array[highIndex + 1], array[pivotIndex]] = [array[pivotIndex], array[highIndex + 1]];
  // console.log(array);
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
