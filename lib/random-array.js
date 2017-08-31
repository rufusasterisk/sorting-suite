function randomArray(arrayLength, noRepeats) {
  let myRandomArray = [];
  if (noRepeats) {
    let myOrderedArray = [];
    for (let i = 0; i < arrayLength; i++){
      myOrderedArray.push(i + 1);
    }
    while (myOrderedArray.length){
      let myIndex = Math.floor(Math.random() * myOrderedArray.length);
      myRandomArray.push(myOrderedArray.splice(myIndex, 1)[0]);
    }
    return myRandomArray;
  }
  else {
    for (let i = 0; i < arrayLength; i++) {
      let myItem = Math.floor(Math.random() * arrayLength)
      myRandomArray.push(myItem);
    }
  }
}

module.exports = randomArray
