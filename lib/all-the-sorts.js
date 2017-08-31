// const bubbleSort = require('./bubble-sort.js');
// const insertionSort = require('./insertion-sort');
// const mergeSort = require('./merge-sort.js');
// const quickSort = require('./quick-sort.js');
// const randomArray = require('./random-array.js');


function runSorts(size){

  let comparisonArray = [];

  for (let i = 0; i < size; i++){
    comparisonArray.push(i + 1);
  }

  const myRandomArray = randomArray(size, true);
  // console.log(myRandomArray);
  let v0;
  let v1;

  let passedArray = myRandomArray.slice(0, myRandomArray.length)
  // console.log("array to sort:")
  // console.log(passedArray);
  v0 = performance.now();
  // console.log(
    bubbleSort(passedArray)
// );
  v1 = performance.now();
  console.log('bubbleSort took ' + (v1 - v0) + ' milliseconds');

  passedArray = myRandomArray.slice(0, myRandomArray.length)
  // console.log("array to sort:")
  // console.log(passedArray);
  v0 = performance.now();
  // console.log(
    insertionSort(passedArray)
  // );
  v1 = performance.now();
  console.log('insertionSort took ' + (v1 - v0) + ' milliseconds');


  passedArray = myRandomArray.slice(0, myRandomArray.length)
  // console.log("array to sort:")
  // console.log(passedArray);
  v0 = performance.now();
  // console.log(
    mergeSort(passedArray)
  // );
  v1 = performance.now();
  console.log('mergeSort took ' + (v1 - v0) + ' milliseconds');


  passedArray = myRandomArray.slice(0, myRandomArray.length)
  // console.log("array to sort:")
  // console.log(passedArray);
  v0 = performance.now();
  // console.log(
  quickSortArrayVersion(passedArray)
// )
  v1 = performance.now();
  console.log('quickSort with Arrays took ' + (v1-v0) + 'milliseconds');


  passedArray = myRandomArray.slice(0, myRandomArray.length)
  // console.log("array to sort:")
  // console.log(passedArray);
  v0 = performance.now();
  // console.log(
  quickSort(passedArray)
// );
  v1 = performance.now();
  console.log('quickSort took ' + (v1 - v0) + ' milliseconds');
}
function benchmarkQuick(size, numberOfTests) {
  let myRandomArray = [];
  let passedArray = [];
  let multipleArrayTotal = 0;
  let inPlaceTotal = 0;
  let v0 = 0;
  let v1 = 0;
  for (let i = 0; i < numberOfTests; i++) {
    myRandomArray = randomArray(size, true);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    quickSort(passedArray);
    v1 = performance.now();
    inPlaceTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    quickSortArrayVersion(passedArray);
    v1 = performance.now();
    multipleArrayTotal += (v1 - v0);
    // console.log(inPlaceTotal);
    // console.log(multipleArrayTotal);
  }
  let inPlaceAvg = inPlaceTotal / numberOfTests;
  let multipleAvg = multipleArrayTotal / numberOfTests;
  console.log(`QuickSort in place average: ${inPlaceAvg}ms`)
  console.log(`QuickSort multiple array average: ${multipleAvg}ms`)
  if (inPlaceTotal < multipleArrayTotal){
    console.log(`In Place sort is ${multipleAvg - inPlaceAvg}ms faster on average`);
    console.log(`That's ${Math.floor(((multipleAvg - inPlaceAvg)/multipleAvg)*100)}% faster!`);
  } else {
    console.log(`Multiple array sort is ${inPlaceAvg - multipleAvg}ms faster on average`);
    console.log(`That's ${Math.floor(((inPlaceAvg - multipleAvg)/multipleAvg)*100)}% faster!`);

  }
}

function benchmarkMerge(size, numberOfTests) {
  let myRandomArray = [];
  let passedArray = [];
  let sliceTotal = 0;
  let spliceTotal = 0;
  let v0 = 0;
  let v1 = 0;
  for (let i = 0; i < numberOfTests; i++) {
    myRandomArray = randomArray(size, true);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    mergeSort(passedArray);
    v1 = performance.now();
    sliceTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    mergeSortSplice(passedArray);
    v1 = performance.now();
    spliceTotal += (v1 - v0);
  }
  let sliceAvg = sliceTotal / numberOfTests;
  let spliceAvg = spliceTotal / numberOfTests;
  console.log(`Slice average: ${sliceAvg}ms`)
  console.log(`Splice average: ${spliceAvg}ms`)
  if (sliceTotal < spliceTotal){
    console.log(`Slice sort is ${spliceAvg - sliceAvg}ms faster on average`);
    console.log(`That's ${Math.floor(((spliceAvg - sliceAvg)/spliceAvg)*100)}% faster!`);
  } else {
    console.log(`Splice sort is ${sliceAvg - spliceAvg}ms faster on average`);
    console.log(`That's ${Math.floor(((sliceAvg - spliceAvg)/spliceAvg)*100)}% faster!`);

  }
}

function benchmarkFastTests(size, numberOfTests) {
  let myRandomArray = [];
  let passedArray = [];
  let insertionTotal = 0;
  let mergeTotal = 0;
  let multipleArrayTotal = 0;
  let inPlaceTotal = 0;
  let dotSortTotal = 0;
  let v0 = 0;
  let v1 = 0;

  for (let i = 0; i < numberOfTests; i++) {
    myRandomArray = randomArray(size, true);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    quickSort(passedArray);
    v1 = performance.now();
    inPlaceTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    quickSortArrayVersion(passedArray);
    v1 = performance.now();
    multipleArrayTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    insertionSort(passedArray);
    v1 = performance.now();
    insertionTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    mergeSort(passedArray);
    v1 = performance.now();
    mergeTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    mergeSort(passedArray);
    v1 = performance.now();
    mergeTotal += (v1 - v0);
    passedArray = myRandomArray.slice(0, myRandomArray.length);
    v0 = performance.now();
    passedArray.sort((a,b) => { return a - b})
    v1 = performance.now();
    dotSortTotal += (v1 - v0);
  }
  let insertionAvg = insertionTotal / numberOfTests;
  let mergeAvg = mergeTotal / numberOfTests;
  let inPlaceAvg = inPlaceTotal / numberOfTests;
  let multipleAvg = multipleArrayTotal / numberOfTests;
  let dotSortAvg = dotSortTotal / numberOfTests;
  console.log(`InsertionSort average: ${insertionAvg}ms`)
  console.log(`MergeSort average: ${mergeAvg}ms`)
  console.log(`QuickSort in place average: ${inPlaceAvg}ms`)
  console.log(`QuickSort multiple array average: ${multipleAvg}ms`)
  console.log(`Array.sort() average: ${dotSortAvg}`)
  if (inPlaceTotal < multipleArrayTotal){
    console.log(`In Place sort is ${multipleAvg - inPlaceAvg}ms faster on average`);
    console.log(`In Place was ${Math.floor(((multipleAvg - inPlaceAvg)/multipleAvg)*100)}% faster!`);
  } else {
    console.log(`Multiple array sort is ${inPlaceAvg - multipleAvg}ms faster on average`);
    console.log(`Multiple array was ${Math.floor(((inPlaceAvg - multipleAvg)/multipleAvg)*100)}% faster!`);

  }
}

// runSorts(5000);
