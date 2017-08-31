function quickSort(array, bottom, top) {
  if (bottom >= top){
    return array;
  }
  // console.log(`bottom: ${bottom}, top: ${top}`);
  let highIndex = top;
  let pivotIndex = top;
  let lowIndex = bottom;
  while ( lowIndex < highIndex) {
    if ( array[lowIndex] <= array[pivotIndex]) {
      lowIndex++; //move up 1
    } else if ( array[highIndex] >= array[pivotIndex]){
      highIndex--; //move down 1
    } else {
      [array[lowIndex], array[highIndex]] = [array[highIndex], array[lowIndex]];
      // lowIndex++;
      // highIndex--;
    }
 }
 [array[pivotIndex], array[highIndex]] = [array[highIndex], array[pivotIndex]] //swap
 bottom < lowIndex-1 ? quickSort(array, bottom, lowIndex - 1) : null;
 highIndex + 1 < top ? quickSort(array, highIndex + 1, top) : null;
 return array; //return array with pivot placed correctly
}

// module.exports = quickSort;

function partition(array, lowStart, highStart) {
  let pivotIndex = highStart;
  let lowIndex = lowStart;
  let highIndex = highStart - 1;

  while (lowIndex < highIndex) {
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
  return highIndex + 1;
}
