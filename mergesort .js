function split(wholeArray) {
  let half = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  const totalLength = array1.length + array2.length;
  const newArr = [];

  //Si recibe 2 arrays ordenados, y el primer valor del primer array es menor al primer valor del segundo array. [1, 2, 3] , [4, 5, 6]
  if (array1[0] < array2[0]) {
    for (let i = 0; i < array2.length; i++) {
      array1.push(array2[i]);
    }
    return array1;
  }

  //Si recibe 2 arrays ordenados pero el primer valor del primer array es mayor al primer valor del segundo array. [4, 5, 6], [1, 2, 3]
  while (newArr.length < totalLength) {
    if (array2[0] < array1[0] || array2.length) {
      newArr.push(array2.shift());
    } else newArr.push(array1.shift());
  }

  return newArr;
}

function mergeSort(array) {
  // [4, 8, 5, 1]
  if (array.length <= 1) {
    //Caso base, 1 solo elemento o menos, retorna y se van vaciando los scopes y almacenandose en m1 y m2.
    return array;
  }
  let [arr1, arr2] = split(array);
  let m1 = mergeSort(arr1); // [4, 8]
  let m2 = mergeSort(arr2); // [5, 1]
  return merge(m1, m2); // Finalmente, a través de merge, juntamos los arrays y los ordenamos.
}
