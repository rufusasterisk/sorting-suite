function quickSortArrayVersion(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array[array.length - 1];

  while (array.length > 1) {
    if (array[0] >= pivot) {
      right.push(array.shift());
    } else {
      left.push(array.shift());
    }
  }
  return [...quickSortArrayVersion(left), pivot, ...quickSortArrayVersion(right)];
}

module.exports = quickSortArrayVersion;
