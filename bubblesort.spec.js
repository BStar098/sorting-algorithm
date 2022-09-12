describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("Un Arreglo desordenado que termine ordenado.", function () {
    let array = [2, 1, 7, 5, 8];
    expect(bubbleSort(array)).toEqual([1, 2, 5, 7, 8]);
  });

  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    let array = [1, 3, 4];
    expect(bubbleSort(array)).toEqual([1, 3, 4]);
  });

  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado.", function () {
    let array = [4, 3, 1];
    expect(bubbleSort(array)).toEqual([1, 3, 4]);
  });
  it("Recorre swap las veces correctas", function () {
    spyOn(window, "swap").and.callThrough();
    let array = [4, 3, 1];
    bubbleSort(array);
    expect(window.swap.calls.count()).toEqual(4);
  });
});
