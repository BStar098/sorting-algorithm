function bubbleSort(array) {
  if (array.length) {
    while (order(array)) {
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i + 1] == "number") {
          let funcSwap = swap(array[i], array[i + 1]);
          array[i] = funcSwap[0];
          array[i + 1] = funcSwap[1];
        }
      }
    }
    return array;
  }
  return array;
}

function swap(num1, num2) {
  let array = [];
  if (num2 > num1) {
    array[0] = num1;
    array[1] = num2;
  } else {
    array[0] = num2;
    array[1] = num1;
  }
  return array;
}

function order(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) return true;
  }
}
