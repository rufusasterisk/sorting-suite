function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  else {
    let mid = Math.ceil(array.length/2);
    let array1 = array.slice(0, mid);
    let array2 = array.slice(mid, array.length);
    return mergeSortedArrays(mergeSort(array1), mergeSort(array2));
  }
}

function mergeSortedArrays(array1, array2) {
  let sortedArray = [];
  while (array1.length && array2.length){
    if (array1[0] >= array2[0]){
      sortedArray.push(array2.shift());
    }
    else {
      sortedArray.push(array1.shift());
    }
  }
  if (array1.length){
    sortedArray = sortedArray.concat(array1);
  }
  if (array2.length){
    sortedArray = sortedArray.concat(array2);
  }
  return sortedArray
}

module.exports = mergeSort;
