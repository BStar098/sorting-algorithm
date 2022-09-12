describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    let array = [1, 2, 3, 4, 5, 6, 7];
    expect(split(array)).toEqual([
      [1, 2, 3],
      [4, 5, 6, 7],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    let array1 = [4, 5, 6];
    let array2 = [1, 2, 3];
    expect(merge(array1, array2)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("Merge Sort", function () {
  it("Es capaz ordenar un arreglo desordenado con merge sort", function () {
    let array = [3,4,1,2];
    expect(mergeSort(array)).toEqual([1,2,3,4]);
  });
});
